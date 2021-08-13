<?php

namespace Database\Seeders;

use App\Utils\Constants;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * php artisan db:seed --class=UsersTableSeeder
     *
     * @return void
     */
    public function run()
    {
        $date = date('Y-m-d H:i:s');
        $users = [
            [
                'name'              => 'Administrator',
                'email'             => 'admin@' . env('APP_DOMAIN'),
                'email_verified_at' => $date,
                'password'          => Hash::make('Admin@123'),
                'role_id'           => Constants::ROLES['ADMIN'],
                'created_at'        => $date,
                'updated_at'        => $date,
            ],
        ];
        for ($i = 1; $i < 31; $i++) $users[] = [
            'name'              => 'Normal User ' . $i,
            'email'             => 'user' . $i . '@' . env('APP_DOMAIN'),
            'email_verified_at' => $date,
            'password'          => Hash::make('User@123'),
            'role_id'           => Constants::ROLES['USER'],
            'created_at'        => $date,
            'updated_at'        => $date,
        ];
        DB::table('users')->insert($users);
    }
}
