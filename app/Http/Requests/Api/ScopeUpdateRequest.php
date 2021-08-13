<?php

namespace App\Http\Requests\Api;

use Illuminate\Support\Facades\Auth;

class ScopeUpdateRequest extends ApiBaseRequest
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
        $id = $this->route('id');
        return [
            'name'        => 'required|string|unique:scopes,name,' . $id,
            'group'       => 'required|string',
            'title'       => 'nullable|string',
            'description' => 'nullable|string',
        ];
    }
}
