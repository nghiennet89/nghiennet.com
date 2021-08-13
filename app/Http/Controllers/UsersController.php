<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use App\Validators\UserValidator;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\Events\Verified;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;

/**
 * Class UsersController.
 *
 * @package namespace App\Http\Controllers;
 */
class UsersController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $repository;

    /**
     * @var UserValidator
     */
    protected $validator;

    /**
     * UsersController constructor.
     *
     * @param UserRepository $repository
     * @param UserValidator $validator
     */
    public function __construct(UserRepository $repository, UserValidator $validator)
    {
        $this->repository = $repository;
        $this->validator = $validator;
    }

    /**
     * @param $id
     * @param $hash
     * @return Application|RedirectResponse|Redirector
     * @throws AuthorizationException
     */
    public function verify($id, $hash)
    {
        $user = $this->repository->find($id);

        if (!hash_equals($id, (string)$user->getKey())) {
            throw new AuthorizationException;
        }
        if (!hash_equals((string)$hash, sha1($user->getEmailForVerification()))) {
            throw new AuthorizationException;
        }
        if ($user->hasVerifiedEmail()) {
            return redirect(route('verification.verified'));
        }
        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }
        return redirect(route('verification.verified'))->with('verified', true);
    }
}
