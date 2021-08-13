<?php

use App\Http\Controllers\Api\ApiUsersController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:api', 'verified']], function () {
    Route::post('login-as/{userId}', [ApiUsersController::class, 'LoginAsUser'])->middleware('scope:users-login-as');

    Route::get('/', [ApiUsersController::class, 'index'])->middleware('scope:users-read');
    Route::get('/{id}', [ApiUsersController::class, 'show'])->middleware('scope:users-read');
    Route::post('/', [ApiUsersController::class, 'userCreate'])->middleware('scope:users-create');
    Route::put('/{id}', [ApiUsersController::class, 'update'])->middleware('scope:users-update');;
    Route::delete('/{id}', [ApiUsersController::class, 'destroy'])->middleware('scope:users-delete');
});

