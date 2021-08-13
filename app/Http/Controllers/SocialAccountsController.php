<?php

namespace App\Http\Controllers;

use App\Repositories\SocialAccountRepository;
use App\Services\UserServices;
use function Psy\debug;

/**
 * Class SocialAccountsController.
 *
 * @package namespace App\Http\Controllers;
 */
class SocialAccountsController extends Controller
{
    /**
     * @var UserServices
     */
    protected $userServices;

    /**
     * @var SocialAccountRepository
     */
    protected $repository;

    /**
     * SocialAccountsController constructor.
     *
     * @param SocialAccountRepository $repository
     * @param UserServices            $userServices
     */
    public function __construct(SocialAccountRepository $repository, UserServices $userServices)
    {
        $this->repository = $repository;
        $this->userServices = $userServices;
    }

    /**
     * @param $driver
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @throws \Exception
     */
    public function loginWithSocial($driver)
    {
        return $this->userServices->loginSocial($driver);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param                          $driver
     */
    public function handleSocialCallback($driver)
    {
        $user = $this->userServices->handleSocialCallback($driver);
        $scopes = $user->listScopes();
        $token = $user->createToken($driver, $scopes)->accessToken;
        $redirect = redirect(route('admin'));
        $redirect->with('personalAccessToken', $token);
        return $redirect;
    }
}
