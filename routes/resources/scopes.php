<?php

use App\Http\Controllers\Api\ApiScopesController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:api', 'verified']], function () {
    Route::get('/export', [ApiScopesController::class, 'export'])->middleware('scope:scopes-read');
    Route::post('/import', [ApiScopesController::class, 'import'])->middleware('scopes:scopes-update,scopes-create');

    Route::get('/', [ApiScopesController::class, 'index'])->middleware('scope:scopes-read');
    Route::get('/{id}', [ApiScopesController::class, 'show'])->middleware('scope:scopes-read');
    Route::post('/', [ApiScopesController::class, 'store'])->middleware('scope:scopes-create');
    Route::put('/{id}', [ApiScopesController::class, 'update'])->middleware('scope:scopes-update');
    Route::delete('/{id}', [ApiScopesController::class, 'destroy'])->middleware('scope:scopes-delete');
});

