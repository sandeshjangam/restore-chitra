<?php

use App\Http\Controllers\ImageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Generate image
Route::get('restore-chitra', [ImageController::class, 'index'])
    ->middleware(['auth', 'verified'])->name('restore-chitra');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('image/upload', [ImageController::class, 'store'])->name('image.store');
    Route::post('image/restore', [ImageController::class, 'generate'])->name('image.restore');
});

require __DIR__ . '/auth.php';
