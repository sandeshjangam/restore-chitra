<?php

use App\Http\Controllers\SocialiteController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {

    Route::get('login', [SocialiteController::class, 'login'])
        ->name('login');

    Route::get('auth/{provider}/redirect', [SocialiteController::class, 'handleRedirect'])
        ->where('provider', 'google')
        ->name('social.redirect');

    Route::get('auth/{provider}/callback', [SocialiteController::class, 'handleCallback'])
        ->where('provider', 'google')
        ->name('social.callback');
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [SocialiteController::class, 'destroy'])
        ->name('logout');
});
