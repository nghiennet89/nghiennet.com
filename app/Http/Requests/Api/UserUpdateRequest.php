<?php

namespace App\Http\Requests\Api;

class UserUpdateRequest extends ApiBaseRequest
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
        $id = $this->route('id');
        return [
            'name'     => 'required|string',
            'email'    => 'required|email|unique:users,email,' . $id,
            'role_id'  => 'numeric',
            'password' => 'string',
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'name.required'  => trans('name is required'),
            'email.required' => trans('email is required'),
        ];
    }
}
