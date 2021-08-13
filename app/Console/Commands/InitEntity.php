<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class InitEntity extends Command
{
    /**
     * Create a new command instance.
     *
     * @return void
     */

    const FILE_LIST = [
        'BACKEND'      => [
            'CONTROLLER'     => 'app/Console/Commands/EntityStub/Backend/ApiController.php.stub',
            'REQUEST_CREATE' => 'app/Console/Commands/EntityStub/Backend/CreateRequest.php.stub',
            'REQUEST_UPDATE' => 'app/Console/Commands/EntityStub/Backend/UpdateRequest.php.stub',
            'ROUTER'         => 'app/Console/Commands/EntityStub/Backend/router.php.stub',
        ],
        'BACKEND_DES'  => [
            'CONTROLLER'     => 'app/Http/Controllers/Api/Api_PLURAL_ENTITY_TITLE_Controller.php',
            'REQUEST_CREATE' => 'app/Http/Requests/Api/_ENTITY_TITLE_CreateRequest.php',
            'REQUEST_UPDATE' => 'app/Http/Requests/Api/_ENTITY_TITLE_UpdateRequest.php',
            'ROUTER'         => 'routes/resources/_PLURAL_ENTITY_.php',
        ],
        'FRONTEND'     => [
            'PAGE_CREATE'  => 'app/Console/Commands/EntityStub/Frontend/Page/Create.vue.stub',
            'PAGE_DELETE'  => 'app/Console/Commands/EntityStub/Frontend/Page/Delete.vue.stub',
            'PAGE_DETAIL'  => 'app/Console/Commands/EntityStub/Frontend/Page/Detail.vue.stub',
            'PAGE_INDEX'   => 'app/Console/Commands/EntityStub/Frontend/Page/index.vue.stub',
            'PAGE_MIXIN'   => 'app/Console/Commands/EntityStub/Frontend/Page/indexMixin.js.stub',
            'PAGE_UPDATE'  => 'app/Console/Commands/EntityStub/Frontend/Page/Update.vue.stub',
            'PAGE_IMPORT'  => 'app/Console/Commands/EntityStub/Frontend/Page/Import.vue.stub',
            'STORE_MODULE' => 'app/Console/Commands/EntityStub/Frontend/Store/module.js.stub',
            'STORE_SCHEMA' => 'app/Console/Commands/EntityStub/Frontend/Store/schema.js.stub',
            'MENU'         => 'app/Console/Commands/EntityStub/Frontend/Menu/entity.js.stub',
            'ROUTER'       => 'app/Console/Commands/EntityStub/Frontend/Router/entity.js.stub',
        ],
        'FRONTEND_DES' => [
            'PAGE_CREATE'  => 'frontend/src/admin/pages/Manage_PLURAL_ENTITY_TITLE_/Create.vue',
            'PAGE_DELETE'  => 'frontend/src/admin/pages/Manage_PLURAL_ENTITY_TITLE_/Delete.vue',
            'PAGE_DETAIL'  => 'frontend/src/admin/pages/Manage_PLURAL_ENTITY_TITLE_/Detail.vue',
            'PAGE_INDEX'   => 'frontend/src/admin/pages/Manage_PLURAL_ENTITY_TITLE_/index.vue',
            'PAGE_MIXIN'   => 'frontend/src/admin/pages/Manage_PLURAL_ENTITY_TITLE_/indexMixin.js',
            'PAGE_UPDATE'  => 'frontend/src/admin/pages/Manage_PLURAL_ENTITY_TITLE_/Update.vue',
            'PAGE_IMPORT'  => 'frontend/src/admin/pages/Manage_PLURAL_ENTITY_TITLE_/Import.vue',
            'STORE_MODULE' => 'frontend/src/store/modules/_ENTITY_.js',
            'STORE_SCHEMA' => 'frontend/src/store/modules/schemas/_ENTITY_.schema.js',
            'MENU'         => 'frontend/src/admin/menu/resources/_ENTITY_.js',
            'ROUTER'       => 'frontend/src/admin/router/modules/resources/_ENTITY_.js',
        ],

    ];
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:init-entity {entityName}';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    protected $listFillableFields = [];
    protected $listSearchableFields = [];

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $validate = $this->validateResource();
        if (!$validate) return false;
        $entityName = strtolower($this->argument('entityName'));
        echo 'Entity name: ' . $entityName . "\n";

        //run command to build entity
        $this->editEntity($entityName);
        $this->buildStructure($entityName);
        //migrate scopes
        Artisan::command('command:migrate-scopes', function () {
            echo 'Finished';
        });
    }

    private function validateResource()
    {
        /*$frontendStoreFile = base_path('frontend/src/store/index.js');
        $frontendStoreContent = file_get_contents($frontendStoreFile);
        $resourceImportStrStart = '//------resources import------';
        $resourceImportStrEnd = '//------end resources import------';
        if (strpos($frontendStoreContent, $resourceImportStrStart) === false) {
            echo 'Can not found the position of ' . $resourceImportStrStart . ' in file ' . $frontendStoreFile;
            return false;
        }

        if (strpos($frontendStoreContent, $resourceImportStrEnd) === false) {
            echo 'Can not found the position of ' . $resourceImportStrEnd . ' in file ' . $frontendStoreFile;
            return false;
        }*/
        return true;
    }

    private function editEntity($entityName)
    {
        $entityNameTitle = ucfirst($entityName);

        //Open App\Entities\{$entityName} to edit extend
        $entityFile = base_path('app/Entities/' . $entityNameTitle . '.php');
        $entityContent = file_get_contents($entityFile);
        $entityContent = str_replace('use Illuminate\Database\Eloquent\Model;', '', $entityContent);
        $entityContent = str_replace('extends Model', 'extends BaseEntity', $entityContent);

        //Add fillable
        $this->listFillableFields = [];
        $fillableField = '';
        while ($fillableField !== '--end') {
            $fillableField = $this->ask('Please enter field for entity, end with "--end"');
            $validator = Validator::make(['field' => $fillableField], ['field' => 'alpha_dash']);
            if ($validator->fails()) {
                $this->error($validator->errors()->first());
            } else {
                if ($fillableField !== '--end') {
                    $this->listFillableFields[] = $fillableField;
                    $this->info('List fillable fields:' . implode(',', $this->listFillableFields));
                }
            }
        }
        $listFillableFields = "'" . implode("','", $this->listFillableFields) . "'";
        $entityContent = str_replace('$fillable = []', '$fillable = [' . $listFillableFields . ']', $entityContent);
        //then write output
        file_put_contents($entityFile, $entityContent);

        //Open app/Repositories/{$entityName}RepositoryEloquent.php to edit criteria
        $repositoryFile = base_path('app/Repositories/' . $entityNameTitle . 'RepositoryEloquent.php');
        $repositoryContent = file_get_contents($repositoryFile);
        $repositoryContent = str_replace('use Prettus\Repository\Criteria\RequestCriteria;', 'use App\Criteria\BaseCriteria;', $repositoryContent);
        $repositoryContent = str_replace('RequestCriteria::class', 'BaseCriteria::class', $repositoryContent);

        //Add searchable
        $this->listSearchableFields = [];
        $searchableField = '';
        while ($searchableField !== '--end') {
            $searchableField = $this->ask('Please enter field for searchable, end with "--end"');
            if (!in_array($searchableField, $this->listFillableFields)) {
                $this->error('This field is invalid');
            } else {
                if ($searchableField !== '--end') {
                    $searchableType = $this->ask('Please enter type of searchable (like, =, <>, ect...)');
                    if (!$searchableType) $searchableType = '=';
                    $this->listSearchableFields[$searchableField] = $searchableType;
                    $this->info('List searchable fields:' . "\n" . print_r($this->listSearchableFields));
                }
            }
        }
        $listSearchableFields = '    protected $fieldSearchable = [' . "\n";
        foreach ($this->listSearchableFields as $field => $searchType) {
            if ($searchType) $listSearchableFields .= "        '" . $field . "' => '" . $searchType . "'," . "\n";
            else $listSearchableFields .= "        '" . $field . "',";
        }
        $listSearchableFields .= '    ];' . "\n";
        $repositoryContent = str_replace('Repository' . "\n" . '{', 'Repository' . "\n" . '{' . "\n" . $listSearchableFields, $repositoryContent);
        //then write output
        file_put_contents($repositoryFile, $repositoryContent);

        //đổ ra file migrate
    }

    private function buildStructure($entityName)
    {
        $validate = $this->validateResource();
        if (!$validate) return false;
        echo 'Entity name: ' . $entityName . "\n";
        $entityNameTitle = ucfirst($entityName);
        $pluralEntityName = Str::plural($entityName);
        $pluralEntityNameTitle = ucfirst($pluralEntityName);

        $class = 'App\\Entities\\' . $entityNameTitle;
        if (!class_exists($class)) {
            echo 'Class App\\Entities\\' . $entityNameTitle . ' not found';
            return 0;
        }
        $entity = new $class();
        $fillable = $entity->getFillable();

        $entityFieldsInput = "\r\n";
        $entityUiSearch = "\r\n";
        $entityParamsSearch = "\r\n";
        $entityTblHeaders = "\r\n";
        foreach ($fillable as $attributeName) {
            $attributeTitleName = ucfirst($attributeName);
            $entityFieldsInput .= '      <v-col cols="6"><v-text-field dense outlined label="' . $attributeTitleName . '" v-model="item.' . $attributeName . '"/></v-col>' . "\r\n";
            $entityTblHeaders .= "        {
          text: '" . $attributeTitleName . "',
          value: '" . $attributeName . "',
        }," . "\r\n";
        }
        foreach ($this->listSearchableFields as $attributeName => $searchType) {
            $attributeTitleName = ucfirst($attributeName);
            $entityUiSearch .= '        <v-text-field dense outlined @keyup.enter="doSearch" class="mr-2" label="Search ' . $attributeTitleName . '"
                      v-model="searchFields.' . $attributeName . '.value"/>' . "\r\n";
            $entityParamsSearch .= '        ' . $attributeName . ": {
          value: '',
          type: 'like',
        }," . "\r\n";
        }
        $arrListReplace = [
            '_ENTITY_FIELDS_INPUT_'  => $entityFieldsInput,
            '_ENTITY_UI_SEARCH_'     => $entityUiSearch,
            '_ENTITY_PARAMS_SEARCH_' => $entityParamsSearch,
            '_ENTITY_TBL_HEADERS_'   => $entityTblHeaders,
            '_PLURAL_ENTITY_TITLE_'  => $pluralEntityNameTitle,
            '_PLURAL_ENTITY_'        => $pluralEntityName,
            '_ENTITY_TITLE_'         => $entityNameTitle,
            '_ENTITY_'               => $entityName,
        ];
        /* back-end */

        foreach (self::FILE_LIST['BACKEND'] as $key => $sourcePath) {
            $desPath = $this->buildDesPath(self::FILE_LIST['BACKEND_DES'][$key], $arrListReplace);
            echo 'Generating ' . $desPath . "\n";
            $this->genFile($sourcePath, $desPath, $arrListReplace);
        }

        foreach (self::FILE_LIST['FRONTEND'] as $key => $sourcePath) {
            $desPath = $this->buildDesPath(self::FILE_LIST['FRONTEND_DES'][$key], $arrListReplace);
            echo 'Generating ' . $desPath . "\n";
            $this->genFile($sourcePath, $desPath, $arrListReplace);
        }
    }

    private function buildDesPath($desTempPath, $replaceArr)
    {
        foreach ($replaceArr as $searchStr => $replaceStr) $desTempPath = str_replace($searchStr, $replaceStr, $desTempPath);
        return $desTempPath;
    }

    private function genFile($sourcePath, $desPath, $replaceArr)
    {
        $sourcePath = base_path($sourcePath);
        $desPath = base_path($desPath);
        $desContent = file_get_contents($sourcePath);
        foreach ($replaceArr as $searchStr => $replaceStr) $desContent = str_replace($searchStr, $replaceStr, $desContent);
        if (file_exists($desPath)) unlink($desPath);
        else {
            $dir = dirname($desPath);
            if (!file_exists($dir)) mkdir($dir);
        }
        file_put_contents($desPath, $desContent);
    }
}
