<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OauthClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * php artisan db:seed --class=OauthClientsTableSeeder
     *
     * @return void
     */
    public function run()
    {
        $date = date('Y-m-d H:i:s');
        // oauth_clients table
        $oauth_clients = [
            [
                'id'                     => 1,
                'name'                   => 'API Password Grant Client',
                'secret'                 => '45h4sD0vLqJP2S36FFvR9cHlYTl6h31zMfko2EOT',
                'redirect'               => env('APP_URL'),
                'personal_access_client' => 0,
                'password_client'        => 1,
                'revoked'                => 0,
                'created_at'             => $date,
                'updated_at'             => $date,
            ],
            [
                'id'                     => 2,
                'name'                   => 'API Personal Access Client',
                'secret'                 => 'qQUnQ5zbuNYn0JcKMgkae3EH8kfDoeWAoMkpFxEl',
                'redirect'               => env('APP_URL'),
                'personal_access_client' => 1,
                'password_client'        => 0,
                'revoked'                => 0,
                'created_at'             => $date,
                'updated_at'             => $date,
            ],
        ];
        DB::table('oauth_clients')->insert($oauth_clients);

        // oauth_personal_access_clients table
        $oauth_personal_access_clients = [
            [
                'id'         => 1,
                'client_id'  => 2,
                'created_at' => $date,
                'updated_at' => $date,
            ],
        ];
        DB::table('oauth_personal_access_clients')->insert($oauth_personal_access_clients);
    }
}
