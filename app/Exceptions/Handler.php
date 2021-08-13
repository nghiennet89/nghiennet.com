<?php

namespace App\Exceptions;

use App\Utils\ResponseBuilder;
use Facade\FlareClient\Api;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\URL;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (ApiException $e) {
            return ResponseBuilder::HandleException($e);
        });
    }

    protected function context()
    {
        return array_merge(parent::context(), [
            'url' => URL::current(),
        ]);
    }
}
