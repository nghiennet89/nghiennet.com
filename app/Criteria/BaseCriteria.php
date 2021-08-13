<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class BaseCriteria.
 *
 * @package namespace App\Criteria;
 */
class BaseCriteria extends RequestCriteria implements CriteriaInterface
{
    /**
     * [all] : allow any "with"
     * []  : disallow any with
     * [relation1, relation2] : allow only some relations
     *
     * @var string
     */
    protected $requestAllowWith = ['all'];

    public function apply($model, RepositoryInterface $repository)
    {
        //process allowWith
        $withField = config('repository.criteria.params.with', 'with');
        $withFieldCount = config('repository.criteria.params.withCount', 'withCount');
        if ($this->requestAllowWith === []) {    //do not allow get relate data

            $this->request->query->set($withField, null);
            $this->request->query->set($withFieldCount, null);

            $this->request->request->set($withField, null);
            $this->request->request->set($withFieldCount, null);

        } else if (is_array($this->requestAllowWith) && $this->requestAllowWith !== ['all']) { //check only allow get some relate data

            $with = $this->request->get($withField, null);
            if ($this->request->query->get($withField) === $with)
                $this->request->query->set($withField, $this->parserRelateWith($with));
            if ($this->request->request->get($withField) === $with)
                $this->request->request->set($withField, $this->parserRelateWith($with));

            $withCount = $this->request->get($withFieldCount, null);
            if ($this->request->query->get($withFieldCount) === $withCount)
                $this->request->query->set($withFieldCount, $this->parserRelateWith($withCount));
            if ($this->request->request->get($withFieldCount) === $withCount)
                $this->request->request->set($withFieldCount, $this->parserRelateWith($withCount));

        }
        return parent::apply($model, $repository);
    }

    /**
     * Apply criteria in query repository
     *
     * @param $with
     * @return string
     */
    private function parserRelateWith($with)
    {
        $allowWith = $this->requestAllowWith;

        $with = $with ? explode(';', $with) : [];

        $with = array_filter($with, function ($val, $key) use ($allowWith) {
            return in_array($val, $allowWith);
        }, ARRAY_FILTER_USE_BOTH);

        return implode(';', $with);
    }

    protected function rebuildSearch($searchArr)
    {
        $paramSearch = config('repository.criteria.params.search', 'search');
        $searchStr = null;
        if (count($searchArr) > 0) {
            $searchStr = [];
            foreach ($searchArr as $field => $value) array_push($searchStr, $field . ':' . $value);
            $searchStr = implode(';', $searchStr);
        }
        if ($this->request->query->get($paramSearch)) $this->request->query->set($paramSearch, $searchStr);
        if ($this->request->request->get($paramSearch)) $this->request->request->set($paramSearch, $searchStr);
    }
}
