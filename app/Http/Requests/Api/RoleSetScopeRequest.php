<?php

namespace App\Http\Requests\Api;

use Illuminate\Support\Facades\Auth;

class RoleSetScopeRequest extends ApiBaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $user = Auth::user();
        return ($user && $user->id === 1);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'role_id'     => 'required|numeric',
            'scope_ids'   => 'nullable|array',
            'scope_ids.*' => 'nullable|numeric',
        ];
    }
}
