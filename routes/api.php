<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


use App\Http\Controllers\Api\ApiUsersController;
use Illuminate\Support\Facades\Route;

Route::get('server-time', function () {
    return date('Y-m-d H:i:s');
});

Route::post('user/login', [ApiUsersController::class, 'login']);
Route::post('user/register', [ApiUsersController::class, 'register']); // register user

Route::group(['middleware' => ['auth:api', 'verified']], function () {

    //basic actions
    Route::group(['prefix' => 'user'], function () {
        Route::get('logout', [ApiUsersController::class, 'logout']);
        Route::get('info', [ApiUsersController::class, 'info']);
        Route::any('sample-notification', [ApiUsersController::class, 'sampleNotification']);
        Route::any('sample-event', [ApiUsersController::class, 'sampleEvent']);
    });
});
//load list resources
$listResourceFiles = scandir(base_path('routes/resources/'));
foreach ($listResourceFiles as $resourceFile) {
    if (!str_contains($resourceFile, '.php')) continue;
    $resourceName = str_replace('.php', '', $resourceFile);
    Route::group(['prefix' => $resourceName], function () use ($resourceFile) {
        require __DIR__ . '/resources/' . $resourceFile;
    });
}
