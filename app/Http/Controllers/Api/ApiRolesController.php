<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\RoleCreateRequest;
use App\Http\Requests\Api\RoleSetScopeRequest;
use App\Http\Requests\Api\RoleUpdateRequest;
use App\Repositories\RoleRepository;
use App\Services\RoleServices;
use App\Validators\RoleValidator;

/**
 * Class RolesController.
 *
 * @package namespace App\Http\Controllers;
 */
class ApiRolesController extends ApiBaseController
{
    /**
     * @var RoleServices
     */
    protected $roleServices;

    public function __construct(RoleRepository $repository, RoleValidator $validator, RoleServices $roleServices)
    {
        $this->roleServices = $roleServices;
        parent::__construct(
            $repository,
            $validator,
            RoleCreateRequest::class,
            RoleUpdateRequest::class
        );
    }

    public function setScopes(RoleSetScopeRequest $request)
    {
        $roleId = $request->input('role_id');
        $listScopes = $request->input('scope_ids');
        return $this->roleServices->setScopes($roleId, $listScopes);
    }
}
