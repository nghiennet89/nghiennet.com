<?php

namespace App\Repositories;

use App\Criteria\BaseCriteria;
use App\Entities\Role;
use App\Validators\RoleValidator;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class RoleRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class RoleRepositoryEloquent extends BaseRepository implements RoleRepository
{
    protected $fieldSearchable = [
        'name' => 'like',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Role::class;
    }

    /**
     * Specify Validator class name
     *
     * @return mixed
     */
    public function validator()
    {

        return RoleValidator::class;
    }

    /**
     * Specify Presenter class name
     *
     * @return mixed
     */
    public function presenter()
    {
        //return RolePresenter::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(BaseCriteria::class));
    }

}
