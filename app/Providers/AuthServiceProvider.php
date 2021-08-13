<?php

namespace App\Providers;

use App\Entities\Scope;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Log;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        // Define scope
        $arrScopes = [];
        try {
            $allScopes = Scope::all()->toArray();
            $arrScopeKey = array_column($allScopes, 'name');
            $arrScopeVal = array_column($allScopes, 'title');
            $arrScopes = array_combine($arrScopeKey, $arrScopeVal);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        }
        Passport::tokensCan($arrScopes);

        // Define default scope
        Passport::setDefaultScope([]);

        Passport::routes();
        //
    }
}
