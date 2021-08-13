<?php

namespace App\Exceptions;

use App\Utils\ResponseBuilder;
use Exception;
use Illuminate\Http\Request;

class ApiException extends Exception {

    protected $message;
    private   $errorCode;
    private   $data;

    public function __construct($message = 'api_exception', $data = null, $errorCode = 400) {
        parent::__construct($message, $errorCode);
        $this->message = $message;
        $this->errorCode = $errorCode;
        $this->data = $data;
    }

    public function getData() {
        return $this->data;
    }
}
