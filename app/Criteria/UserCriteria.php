<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class BaseCriteria.
 *
 * @package namespace App\Criteria;
 */
class UserCriteria extends BaseCriteria
{
    public function apply($model, RepositoryInterface $repository)
    {
        $paramSearch = config('repository.criteria.params.search', 'search');
        $search = $this->request->get($paramSearch, null);
        if ($search) {
            $search = $this->parserSearchData($search);

            //use custom search for some fields
            $this->addSearch($model, $search);
            //and rebuild search to continue use default search for other fields
            $this->rebuildSearch($search);
        }
        $paramOrderBy = config('repository.criteria.params.orderBy', 'orderBy');
        $paramSortedBy = config('repository.criteria.params.sortedBy', 'sortedBy');
        $orderBy = $this->request->get($paramOrderBy, null);
        $sortedBy = $this->request->get($paramSortedBy, null);
        if ($orderBy && $sortedBy) $this->addSort($model, $orderBy, $sortedBy);

        return parent::apply($model, $repository);
    }

    private function addSearch(&$model, &$search)
    {
        $roleName = isset($search['role_name']) ? $search['role_name'] : null;
        if ($roleName) {
            $model = $model->whereHas('roles', function ($query) use ($roleName) {
                $query->where('name', 'like', $roleName);
            });
            unset($search['role_name']);
        }
    }

    private function addSort(&$model, $orderBy, $sortedBy)
    {
        if ($orderBy === 'role_name') {
            $model = $model->join('roles', 'roles.id', '=', 'users.role_id')->orderBy('roles.name', $sortedBy)->select('users.*');
            $this->request->query->set('orderBy', null);
            $this->request->request->set('orderBy', null);
        }
    }
}
