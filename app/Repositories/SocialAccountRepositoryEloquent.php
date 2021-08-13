<?php

namespace App\Repositories;

use App\Criteria\BaseCriteria;
use App\Entities\SocialAccount;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class SocialAccountRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class SocialAccountRepositoryEloquent extends BaseRepository implements SocialAccountRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return SocialAccount::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(BaseCriteria::class));
    }

}
