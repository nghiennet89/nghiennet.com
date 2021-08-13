<?php

namespace App\Utils;

use App\Exceptions\ApiException;
use Exception;

class ResponseBuilder
{


    public static function SuccessCreate($data = null)
    {
        return self::Success($data, __('data.create.ok'));
    }

    public static function SuccessUpdate($data = null)
    {
        return self::Success($data, __('data.update.ok'));
    }

    public static function SuccessDelete()
    {
        return self::Success(null, __('data.delete.ok'));
    }

    public static function FailGet($errorCode = 404)
    {
        return self::Fail(__('data.get.ng'), $errorCode);
    }

    public static function FailCreate($errorCode = 500)
    {
        return self::Fail(__('data.create.ng'), $errorCode);
    }

    public static function FailUpdate($errorCode = 500)
    {
        return self::Fail(__('data.update.ng'), $errorCode);
    }

    public static function FailDelete($errorCode = 500)
    {
        return self::Fail(__('data.delete.ng'), $errorCode);
    }

    public static function Fail($message = '', $errorCode = 500)
    {
        return self::build(null, $message, true, $errorCode);
    }

    public static function Success($data = null, $message = '')
    {
        return self::build($data, $message);
    }

    public static function build($data = null, $message = '', $error = false, $code = 200)
    {
        $res = [
            'error'   => $error,
            'message' => $message,
            'data'    => $data,
        ];
        return response()->json($res, $code);
    }

    public static function HandleException(Exception $exception)
    {
        $res = [
            'error'   => true,
            'message' => $exception->getMessage(),
        ];
        if ($exception instanceof ApiException) {
            $res['data'] = $exception->getData();
            if (env('APP_DEBUG') === true) {
                $res['file'] = $exception->getFile();
                $res['line'] = $exception->getLine();
            }
            if (env('API_DEBUG_TRACE') === true) {
                $res['trace'] = $exception->getTraceAsString();
            }
        }
        //return $res;
        return response()->json($res, $exception->getCode());
    }

    public static function plainText($data)
    {
        if (!is_string($data)) $data = json_encode($data);
        return response($data, 200)->header('Content-Type', 'text/plain');
    }
}
