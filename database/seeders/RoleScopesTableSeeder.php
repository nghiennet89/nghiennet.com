<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleScopesTableSeeder extends Seeder
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
        $roleScopes = [
            [
                'id'         => 1,
                'role_id'    => 1,
                'scope_id'   => 1,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 2,
                'role_id'    => 1,
                'scope_id'   => 2,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 3,
                'role_id'    => 1,
                'scope_id'   => 3,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 4,
                'role_id'    => 1,
                'scope_id'   => 4,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 5,
                'role_id'    => 1,
                'scope_id'   => 5,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 6,
                'role_id'    => 1,
                'scope_id'   => 6,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 7,
                'role_id'    => 1,
                'scope_id'   => 7,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 8,
                'role_id'    => 1,
                'scope_id'   => 8,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 9,
                'role_id'    => 1,
                'scope_id'   => 9,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 10,
                'role_id'    => 1,
                'scope_id'   => 10,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 11,
                'role_id'    => 1,
                'scope_id'   => 11,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 12,
                'role_id'    => 1,
                'scope_id'   => 12,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 13,
                'role_id'    => 1,
                'scope_id'   => 13,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 14,
                'role_id'    => 1,
                'scope_id'   => 14,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 15,
                'role_id'    => 2,
                'scope_id'   => 7,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 16,
                'role_id'    => 2,
                'scope_id'   => 12,
                'created_at' => $date,
                'updated_at' => $date,
            ],
        ];
        DB::table('role_scopes')->insert($roleScopes);
    }
}
