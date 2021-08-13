<?php

namespace App\Entities;

use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class SocialAccount.
 *
 * @package namespace App\Entities;
 */
class SocialAccount extends BaseEntity implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'user_id',
        'provider_user_id',
        'provider_name',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
