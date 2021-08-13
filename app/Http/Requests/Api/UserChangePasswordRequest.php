<?php

namespace App\Http\Requests\Api;

class UserChangePasswordRequest extends ApiBaseRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
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
            'password'      => 'required|between:8,20|regex:/^.*(?=.{2,})(?=.*[a-zA-Z])(?=.*[0-9]).*$/',
            'password_conf' => 'required|min:8|same:password',
        ];

    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'password.required'      => trans('password is required '),
            'password_conf.required' => trans('password confirm is required'),
        ];
    }
}
