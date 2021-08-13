<?php

namespace App\Http\Requests\Common;

use App\Exceptions\ApiException;
use Illuminate\Contracts\Validation\Validator;

/**
 * Trait ApiFormRequestTrait
 *
 * @package App\Http\Requests\Common
 */
trait ApiFormRequestTrait
{
    protected function failedValidation(Validator $validator)
    {
        throw new ApiException('Request Validation Fail', $validator->errors()->all(), 422);
    }
}
