<?php

namespace App\Http\Controllers\Api;

use App\Events\BaseEvent;
use App\Http\Requests\Api\UserAddRoleRequest;
use App\Http\Requests\Api\UserChangePasswordRequest;
use App\Http\Requests\Api\UserCreateRequest;
use App\Http\Requests\Api\UserRegisterRequest;
use App\Http\Requests\Api\UserUpdateRequest;
use App\Notifications\BaseBroadcast;
use App\Repositories\UserRepository;
use App\Services\UserServices;
use App\Utils\ResponseBuilder;
use App\Validators\UserValidator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ApiUsersController extends ApiBaseController
{
    /**
     * @var UserServices
     */
    protected $userServices;

    /**
     * @var mixed
     */
    protected $clientId;

    /**
     * @var mixed
     */
    protected $clientSecret;

    /**
     * ApiUsersController constructor.
     *
     * @param UserServices   $userServices
     * @param UserRepository $repository
     * @param UserValidator  $validator
     */
    public function __construct(UserRepository $repository, UserValidator $validator, UserServices $userServices)
    {
        parent::__construct(
            $repository,
            $validator,
            UserCreateRequest::class,
            UserUpdateRequest::class
        );
        $this->userServices = $userServices;
    }

    /**
     * @param \App\Http\Requests\Api\UserCreateRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws \App\Exceptions\ApiException
     */
    public function userCreate(UserCreateRequest $request)
    {
        $registerData = $this->userServices->create($request->all());

        if (!$registerData) ResponseBuilder::FailCreate();

        return ResponseBuilder::SuccessCreate($registerData);
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function logout(Request $request)
    {
        $user = $request->user();
        if ($user) $user->token()->revoke();
        return ResponseBuilder::Success(null, __('Logout success'));

    }


    /**
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function info()
    {
        if (!auth()->user()) return ResponseBuilder::FailGet();
        $userId = auth()->user()->id;
        return $this->repository->with(['role', 'role.roleScopes', 'role.roleScopes.scope'])->find($userId);
    }

    /**
     * Register user
     *
     * @param UserRegisterRequest $registerRequest
     *
     * @return JsonResponse
     */
    public function register(UserRegisterRequest $registerRequest)
    {
        $data = $registerRequest->all();
        $registerData = $this->userServices->register($data);

        if (!$registerData) ResponseBuilder::FailCreate();

        return ResponseBuilder::Success($registerData, __('Register success'));
    }

    /**
     * Resend the email verification notification.
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function resend(Request $request)
    {
        $user = $request->user();
        if ($request->user()->hasVerifiedEmail()) return ResponseBuilder::Success($user, __('Email verified'));

        $user->sendEmailVerificationNotification();

        return ResponseBuilder::Success(null, __('Email sent'));
    }

    /**
     * @param UserChangePasswordRequest $request
     * @param                           $id
     *
     * @return JsonResponse
     */
    public function changePassword(UserChangePasswordRequest $request, $id)
    {
        $newPw = $request->password;
        $dataResponse = $this->userServices->changePw($newPw, $id);
        if (!$dataResponse) return ResponseBuilder::FailUpdate();
        return ResponseBuilder::SuccessUpdate();
    }

    public function addRoleByUserEmail(UserAddRoleRequest $request, UserRepository $userRepository)
    {
        $email = $request->user_email;
        $roleId = $request->role_id;
        $user = $userRepository->findByField('email', $email, '*');
        if (!count($user)) return ResponseBuilder::FailUpdate();

        $dataResponse = $this->userServices->addRoleForUser($roleId, $user->first()->id);
        if (!$dataResponse) return ResponseBuilder::FailUpdate();

        return ResponseBuilder::SuccessUpdate($dataResponse);
    }

    /**
     * @param UserAddRoleRequest $request
     * @param UserRepository     $userRepository
     *
     * @return JsonResponse
     */
    public function addRoleByUserId(UserAddRoleRequest $request, UserRepository $userRepository)
    {
        $roleId = $request->role_id;
        $userId = $request->user_id;
        $user = $userRepository->find($userId);
        if (!count($user)) return ResponseBuilder::FailUpdate();

        $dataResponse = $this->userServices->addRoleForUser($roleId, $user->first()->id);
        if (!$dataResponse) return ResponseBuilder::FailUpdate();

        return ResponseBuilder::SuccessUpdate($dataResponse);
    }

    /**
     * @param Request $request
     * @param         $id
     *
     * @return JsonResponse
     * @throws \App\Exceptions\ApiException
     */
    public function update(Request $request, $id)
    {
        $password = $request->input('password', null);
        if ($password !== null) {
            $hashPassword = Hash::make($password);
            if ($request->request->get('password') === $password) $request->request->set('password', $hashPassword);
            else if ($request->query->get('password') === $password) $request->query->set('password', $hashPassword);
        }
        return parent::update($request, $id);
    }

    public function sampleNotification()
    {
        $user = Auth::user();
        return $user->notify(new BaseBroadcast('Test BaseBroadcast'));
    }

    public function sampleEvent()
    {
        event(new BaseEvent('Test BaseEvent'));
        return ResponseBuilder::Success();
    }
}
