<?php

namespace App\Http\Controllers;

use App\Models\SocialiteUser;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        auth()->guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    /**
     * Display the login view.
     */
    public function login(): Response
    {
        return Inertia::render('Login', [
            'status' => session('status'),
        ]);
    }

    /**
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function handleRedirect(string $provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * @return \Illuminate\Http\RedirectResponse
     */
    public function handleCallback(string $provider)
    {
        try {

            $socialiteUser = Socialite::driver($provider)->user();

            $user = User::where('email', $socialiteUser->getEmail())->first();

            if (! $user) {
                $user = User::create([
                    'email' => $socialiteUser->getEmail(),
                    'name' => $socialiteUser->getName(),
                    'password' => Hash::make(Str::random(16)),
                ]);

                // Force-fill the email_verified_at attribute.
                $user->forceFill([
                    'email_verified_at' => Carbon::now(),
                ]);

                // Save the user instance to persist the changes
                $user->save();
            }

            $socialiteUserModel = SocialiteUser::where('provider', $provider)
                ->where('provider_id', $socialiteUser->getId())
                ->first();

            if (! $socialiteUserModel) {
                // When user manually registered and trying to log-in with Google, creating socialite user entry.
                $user->socialiteUsers()->create([
                    'provider' => $provider,
                    'provider_id' => $socialiteUser->getId(),
                    'provider_token' => $socialiteUser->token ?? '',
                    'provider_refresh_token' => $socialiteUser->refreshToken ?? '',
                ]);
            }

            auth()->login($user);

            return redirect(RouteServiceProvider::HOME);
        } catch (Exception $e) {
            return redirect('/login?error=Failed to login.');
        }
    }
}
