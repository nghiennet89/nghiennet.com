<?php

namespace App\Services;

use App\Entities\SocialAccount;
use App\Entities\User;
use App\Exceptions\ApiException;
use App\Repositories\UserRepository;
use App\Utils\Constants;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Contracts\User as ProviderUser;
use Laravel\Socialite\Facades\Socialite;

/**
 * Class UserService
 *
 * @package App\Services
 */
class UserServices
{
    /**
     * @var UserRepository
     */
    protected $userRepository;

    /**
     * UserService constructor.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param $driver
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @throws \Exception
     */
    public function loginSocial($driver)
    {
        $socialiteObj = Socialite::driver($driver);
        if (!$socialiteObj) throw new \Exception("Social Driver " . $driver . "Not found");
        else return $socialiteObj->redirect();
    }

    /**
     * @param $driver
     *
     * @return User|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|mixed|null|object
     */
    public function handleSocialCallback($driver)
    {
        $socialiteObj = Socialite::driver($driver);
        $providerUser = $socialiteObj->stateless()->user();
        $user = self::socialiteCreateOrGetUser($providerUser, $driver);
        return $user;
    }

    /**
     * @param ProviderUser $providerUser
     * @param              $socialName
     *
     * @return User|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|mixed|null|object
     */
    private static function socialiteCreateOrGetUser(ProviderUser $providerUser, $socialName)
    {
        $socialAccount = SocialAccount::query()->where('provider_name', '=', $socialName)
            ->where('provider_user_id', '=', $providerUser->getId())
            ->first();
        if ($socialAccount && $socialAccount->user) return $socialAccount->user;

        $email = $providerUser->getEmail() ? $providerUser->getEmail() : $providerUser->getId() . '@iso-logistics.vn';
        if (!$socialAccount) $socialAccount = new SocialAccount([
            'provider_user_id' => $providerUser->getId(),
            'provider_name'    => $socialName,
        ]);

        $user = User::query()->where('email', '=', $email)->first();
        if (!$user) {
            $user = new User();
            $user->fill([
                'email'             => $email,
                'email_verified_at' => now(),
                'role_id'           => Constants::ROLES['USER'],
                'name'              => $providerUser->getName(),
                'password'          => Hash::make($email . '_password'),
            ]);
            $user->save();
        }
        $socialAccount->user()->associate($user);
        $socialAccount->save();
        return $user;
    }

    /**
     * @param $data
     *
     * @return mixed
     */
    public function register($data)
    {
        DB::beginTransaction();
        try {
            $data = [
                'name'     => $data['name'],
                'email'    => $data['email'],
                'password' => Hash::make($data['password']),
                'role_id'  => Constants::ROLES['USER'],
            ];
            $returnUser = User::create($data);
            event(new Registered($returnUser));
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw new ApiException('Register fail: ' . $e->getMessage());
        }
        return $returnUser;
    }

    public function create($data) {
        DB::beginTransaction();
        try {
            $data = [
                'name'     => $data['name'],
                'email'    => $data['email'],
                'password' => Hash::make($data['password']),
                'role_id'  => $data['role_id'],
            ];
            $returnUser = User::create($data);
            $returnUser->markEmailAsVerified();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw new ApiException('Register fail: ' . $e->getMessage());
        }
        return $returnUser;
    }

    /**
     * @param $pw
     * @param $id
     *
     * @return mixed
     */
    public function changePw($pw, $id)
    {
        DB::transaction(function () use ($pw, $id, &$returnUser) {
            $data = [
                'password' => bcrypt($pw),
            ];
            $returnUser = $this->userRepository->update($data, $id);
        });

        return $returnUser;
    }

    /**
     * @param $roleId
     * @param $userId
     *
     * @return bool|mixed
     */
    public function addRoleForUser($roleId, $userId)
    {
        return $this->userRepository->update(['role_id' => $roleId], $userId);
    }


}
