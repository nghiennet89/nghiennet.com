<?php

namespace App\Repositories;

use App\Criteria\BaseCriteria;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ScopeRepository;
use App\Entities\Scope;
use App\Validators\ScopeValidator;

/**
 * Class ScopesRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class ScopeRepositoryEloquent extends BaseRepository implements ScopeRepository
{
    protected $fieldSearchable = [
        'name'  => 'like',
        'title' => 'like',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Scope::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(BaseCriteria::class));
    }

}
