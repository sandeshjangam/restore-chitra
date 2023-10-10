<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {

        $user = $request->user();

        $imageData = [];

        if ($user) {

            $imageUsage = $user->usages()->firstOrCreate(
                ['code' => 'image'],
                ['used' => 0]
            );

            // Get the current time
            $currentTime = Carbon::now();

            // Get tomorrow's date at midnight (12:00 AM)
            $midnightTomorrow = Carbon::tomorrow()->startOfDay();

            // Calculate the difference between the current time and midnight tomorrow
            $timeToReset = $currentTime->diff($midnightTomorrow);

            $imageData = [
                'images_limit' => 5,
                'images_used' => $imageUsage->used,
                'images_remaining' => 5 - $imageUsage->used,
                'time_to_reset' => $timeToReset->format('%h hours and %i minutes'),
            ];
        }

        return Inertia::render('RestoreChitra', $imageData);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $user = $request->user();

        if (! $user) {
            return response()->json([
                'message' => 'User not found',
            ], 404);
        }

        $imageUsage = $user->usages()->firstOrCreate(
            ['code' => 'image'],
            ['used' => 0]
        );

        // Check if user has reached the maximum number of images allowed
        if ($imageUsage->used >= 5) {
            return response()->json([
                'message' => 'You have reached the maximum number of images allowed',
            ], 422);
        }

        $request->validate([
            'image' => 'required|image|mimes:jpeg,jpg,png|max:2048',
        ]);

        $file = $request->file('image');

        if ($file instanceof UploadedFile && $file->isValid()) {

            $fullFileName = $file->getClientOriginalName();
            $fileName = pathinfo($fullFileName, PATHINFO_FILENAME);
            $fileType = $file->getClientOriginalExtension();

            $imageName = time() . '_' . $fileName . '.' . $fileType;
            $imagePath = $file->storeAs(
                'images',
                $imageName,
                's3'
            );

            if ($imagePath) {
                /**
                 * @var \Illuminate\Filesystem\AwsS3V3Adapter $s3Disk
                 */
                $s3Disk = Storage::disk('s3');

                $imageUrl = $s3Disk->temporaryUrl(
                    $imagePath,
                    now()->addMinutes(60)
                );

                return response()->json([
                    'message' => 'Image uploaded successfully',
                    'image_url' => $imageUrl,
                ]);
            }
        }

        return response()->json([
            'message' => 'Failed to upload image',
        ], 422);
    }

    /**
     * Generate photo.
     *
     * @since x.x.x
     */
    public function generate(Request $request): JsonResponse
    {
        $user = $request->user();

        if (! $user) {
            return response()->json([
                'message' => 'User not found',
            ], 404);
        }

        $request->validate([
            'imageUrl' => 'required|string',
        ]);

        $imageUrl = $request->input('imageUrl');

        if (! $imageUrl) {
            return response()->json([
                'message' => 'Image URL is required',
            ], 422);
        }

        $replicateApiKey = config('constants.replicate_api_key');

        $generateResponse = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Authorization' => 'Token ' . $replicateApiKey,
        ])->post('https://api.replicate.com/v1/predictions', [
            'version' => '9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3',
            'input' => [
                'img' => $imageUrl,
                'version' => 'v1.4',
                'scale' => 2,
            ],
        ]);

        $jsonGenerateResponse = $generateResponse->json();

        $endpointUrl = $jsonGenerateResponse['urls']['get'] ?? null;

        $restoredImage = null;

        while (! $restoredImage) {

            $finalResponse = Http::withHeaders([
                'Content-Type' => 'application/json',
                'Authorization' => 'Token ' . $replicateApiKey,
            ])->get($endpointUrl);

            $jsonFinalResponse = $finalResponse->json();

            if ($jsonFinalResponse['status'] === 'succeeded') {
                $restoredImage = $jsonFinalResponse['output'];
            } elseif ($jsonFinalResponse['status'] === 'failed') {
                break;
            } else {
                sleep(1);
            }
        }

        if (! $restoredImage) {
            return response()->json([
                'message' => 'Failed to restore image',
            ], 422);
        }

        // Consume the usage
        $user->usages()->updateOrCreate([
            'code' => 'image',
        ], [
            'used' => DB::raw('used + ' . 1),
        ])->fresh();

        return response()->json([
            'imageUrl' => $restoredImage,
        ]);
    }
}
