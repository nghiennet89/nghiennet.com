<?php

use App\Http\Controllers\Api\ApiRolesController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:api', 'verified']], function () {
    Route::post('/set-scopes', [ApiRolesController::class, 'setScopes'])->middleware('scope:roles-set-scopes');

    Route::get('/', [ApiRolesController::class, 'index'])->middleware('scope:roles-read');
    Route::get('/{id}', [ApiRolesController::class, 'show'])->middleware('scope:roles-read');
    Route::post('/', [ApiRolesController::class, 'store'])->middleware('scope:roles-create');
    Route::put('/{id}', [ApiRolesController::class, 'update'])->middleware('scope:roles-update');
    Route::delete('/{id}', [ApiRolesController::class, 'destroy'])->middleware('scope:roles-delete');
});

