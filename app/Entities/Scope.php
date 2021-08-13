<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Scopes.
 *
 * @package namespace App\Entities;
 */
class Scope extends BaseEntity implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'group', 'title', 'description'];

    public function roleScopes()
    {
        return $this->hasMany(RoleScopes::class);
    }
}
