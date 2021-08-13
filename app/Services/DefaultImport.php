<?php

namespace App\Services;

use App\Exceptions\ApiException;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class DefaultImport implements ToModel, WithHeadingRow
{

    private $entity;
    private $fillable;

    public function __construct($repository)
    {
        $this->entity = $repository->getModel();
        $this->fillable = $this->entity->getFillable();
    }

    public function model(array $row)
    {
        if (isset($row['id']) && is_numeric(trim($row['id']))) {
            $item = $this->entity->find(intval($row['id']));
            if (!$item) throw new ApiException('Import failed. Row not found with id:' . $row['id']);
        } else $item = new $this->entity();

        foreach ($this->fillable as $field) $item->$field = $row[$field];
        return $item;
    }
}
