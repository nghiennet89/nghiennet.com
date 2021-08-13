<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RolesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request
     *
     * @return array
     */

    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'scope'      => $this->scope,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
