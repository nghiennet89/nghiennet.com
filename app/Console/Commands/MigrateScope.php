<?php

namespace App\Console\Commands;

use App\Entities\Role;
use App\Entities\RoleScopes;
use App\Entities\Scope;
use App\Utils\Constants;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class MigrateScope extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:migrate-scopes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $routeCollection = Route::getRoutes();

        //get all scope in route
        $allScopes = [];
        foreach ($routeCollection as $route) {
            $middlewares = $route->getAction()['middleware'];
            if (!is_array($middlewares)) $middlewares = [$middlewares];
            foreach ($middlewares as $middleware) if (strpos($middleware, 'scope:') !== false) {
                $scope = str_replace('scope:', '', $middleware);
                if (!in_array($scope, $allScopes)) array_push($allScopes, $scope);
            }
        }
        //check and put scopes to DB
        $allExistingScopes = array_column(Scope::query()->get()->toArray(), 'name');
        $scopesToAdd = [];
        $jsonArrScopes = [];
        foreach ($allScopes as $scope) {
            $jsonArrScopes[$scope] = str_replace('-', ' ', $scope);
            if (!in_array($scope, $allExistingScopes)) {
                //add scope to DB
                $scopeGroup = explode('-', $scope)[0];
                $newScope = [
                    'name'       => $scope,
                    'title'      => str_replace('-', ' ', $scope),
                    'group'      => $scopeGroup,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ];
                array_push($scopesToAdd, $newScope);
            }
        }

        //assign all scope to super admin
        $existingAdminScopes = Scope::query()
            ->whereIn('id', RoleScopes::query()->select('scope_id')->where('role_id', '=', Constants::ROLES['ADMIN']))
            ->get()->toArray();
        $existingAdminScopes = array_column($existingAdminScopes, 'name');
        DB::beginTransaction();
        try {
            if (count($scopesToAdd)) Scope::query()->insert($scopesToAdd);
            $allExistingScopes = Scope::query()->get()->toArray();

            $scopesToAssign = [];
            foreach ($allExistingScopes as $existingScope)
                if (!in_array($existingScope['name'], $existingAdminScopes)) {
                    array_push($scopesToAssign, [
                        'role_id'    => Constants::ROLES['ADMIN'],
                        'scope_id'   => $existingScope['id'],
                        'created_at' => date('Y-m-d H:i:s'),
                        'updated_at' => date('Y-m-d H:i:s'),
                    ]);
                    echo 'new scope to assign: ' . $existingScope['name'] . "\n";
                }
            if (count($scopesToAssign)) RoleScopes::query()->insert($scopesToAssign);
            DB::commit();
            echo 'Completed' . "\n";
        } catch (\Exception $e) {
            DB::rollBack();
            echo 'Fail';
        }
    }
}
