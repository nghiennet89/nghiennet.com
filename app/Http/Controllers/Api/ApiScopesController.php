<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ScopeCreateRequest;
use App\Http\Requests\Api\ScopeUpdateRequest;
use App\Repositories\ScopeRepository;
use App\Validators\ScopeValidator;

/**
 * Class RolesController.
 *
 * @package namespace App\Http\Controllers;
 */
class ApiScopesController extends ApiBaseController
{
    public function __construct(ScopeRepository $repository, ScopeValidator $validator)
    {
        parent::__construct(
            $repository,
            $validator,
            ScopeCreateRequest::class,
            ScopeUpdateRequest::class
        );
    }
}
