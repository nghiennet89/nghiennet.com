<?php

namespace App\Entities;

use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Venturecraft\Revisionable\RevisionableTrait;

/**
 * Class User.
 *
 * @package namespace App\Entities;
 */
class User extends BaseEntity
    implements Transformable,
    \Illuminate\Contracts\Auth\Authenticatable,
    \Illuminate\Contracts\Auth\MustVerifyEmail,
    \Illuminate\Contracts\Auth\CanResetPassword
{
    use TransformableTrait;
    use Notifiable;
    use HasApiTokens;
    use Authenticatable;
    use CanResetPassword;
    use MustVerifyEmail;
    use RevisionableTrait;

    /**
     * enable revision for user
     *
     * @var bool
     */
    protected $revisionCreationsEnabled = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'role_id',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'created_at'        => 'datetime:Y-m-d H:i:s',
        'updated_at'        => 'datetime:Y-m-d H:i:s',
        'email_verified_at' => 'datetime:Y-m-d H:i:s',
    ];

    /**
     * @param $accessToken
     *
     * @return $this
     */
    public function withAccessToken($accessToken)
    {
        $this->accessToken = $accessToken;
        $token = $this->token();
        $token->scopes = $this->listScopes();
        $token->save();
        return $this;
    }

    public function listScopes()
    {
        $roleScopes = $this->role ? $this->role->roleScopes : null;
        if (!$roleScopes) return [];

        $scopes = [];
        foreach ($roleScopes as $roleScope) {
            $scopename = $roleScope->scope ? $roleScope->scope->name : null;
            if ($scopename) array_push($scopes, $scopename);
        }
        return $scopes;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function socialAccount()
    {
        return $this->hasMany(SocialAccount::class);
    }
}
