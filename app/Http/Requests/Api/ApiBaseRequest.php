<?php

namespace App\Http\Requests\Api;

use App\Http\Requests\Common\ApiFormRequestTrait;
use Illuminate\Foundation\Http\FormRequest;

class ApiBaseRequest extends FormRequest
{
    use ApiFormRequestTrait;
}
