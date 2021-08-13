<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class RoleScopes.
 *
 * @package namespace App\Entities;
 */
class RoleScopes extends BaseEntity implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['role_id', 'scope_id'];


    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function scope()
    {
        return $this->belongsTo(Scope::class);
    }
}
