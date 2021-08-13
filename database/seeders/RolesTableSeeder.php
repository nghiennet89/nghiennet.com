<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
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
        $roles = [
            [
                'id'         => 1,
                'name'       => 'Super Administrator',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 2,
                'name'       => 'Normal User',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 3,
                'name'       => 'Editor',
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'id'         => 4,
                'name'       => 'Visitor',
                'created_at' => $date,
                'updated_at' => $date,
            ],

        ];
        DB::table('roles')->insert($roles);
    }
}
