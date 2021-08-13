<?php

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

use App\Http\Controllers\Controller;
use App\Http\Controllers\SocialAccountsController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes(['verify' => true]);

//Auth verify email
Route::get('email/verify/{id}/{hash}', [UsersController::class, 'verify'])->name('verification.verify');
Route::get('email/verified', function () {
    return view('emails.verified');
})->name('verification.verified');


//social account login & callback
Route::get('social-login/{driver}', [SocialAccountsController::class, 'loginWithSocial'])->name('login-with-social');
Route::get('social-login/{driver}/callback', [SocialAccountsController::class, 'handleSocialCallback'])->name('handle-social-callback');

Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


// IMPORTANT : THESE ROUTER MUST BE END OF LARAVEL ROUTER (to catch all vue-router)
//Base view
Route::get('/admin/{any?}', [Controller::class, 'admin'])->name('admin');
Route::get('/{all}', [Controller::class, 'index'])->where('all', '^(?!api).*$')->name('index');
