<?php

namespace App\Http\Requests\Api;

class UserRegisterRequest extends ApiBaseRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'          => 'required|string',
            'password'      => 'required|string|min:8',
            'password_conf' => 'required|min:8|same:password',
            'email'         => 'required|email|unique:users,email',
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'username.required' => trans('name is required'),
            'email.required'    => trans('email is required'),
        ];
    }
}
