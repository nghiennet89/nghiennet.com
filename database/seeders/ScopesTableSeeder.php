<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ScopesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * php artisan db:seed --class=RolesTableSeeder
     *
     * @return void
     */
    public function run()
    {
        $date = date('Y-m-d H:i:s');
        $scopes = [
            [
                'id'         => 1,
                'name'       => 'users-create',
                'group'      => 'users',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 2,
                'name'       => 'users-read',
                'group'      => 'users',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 3,
                'name'       => 'users-update',
                'group'      => 'users',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 4,
                'name'       => 'users-delete',
                'group'      => 'users',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 5,
                'name'       => 'users-login-as',
                'group'      => 'users',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 6,
                'name'       => 'roles-create',
                'group'      => 'roles',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 7,
                'name'       => 'roles-read',
                'group'      => 'roles',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 8,
                'name'       => 'roles-update',
                'group'      => 'roles',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 9,
                'name'       => 'roles-delete',
                'group'      => 'roles',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 10,
                'name'       => 'roles-set-scopes',
                'group'      => 'roles',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 11,
                'name'       => 'scopes-create',
                'group'      => 'scopes',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 12,
                'name'       => 'scopes-read',
                'group'      => 'scopes',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 13,
                'name'       => 'scopes-update',
                'group'      => 'scopes',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 14,
                'name'       => 'scopes-delete',
                'group'      => 'scopes',
                'created_at' => $date,
                'updated_at' => $date,
            ],


        ];
        foreach ($scopes as &$scope) {
            $scope['title'] = str_replace('-', ' ', $scope['name']);
        }
        DB::table('scopes')->insert($scopes);
    }
}
