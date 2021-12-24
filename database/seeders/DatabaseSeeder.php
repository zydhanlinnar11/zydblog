<?php

namespace Database\Seeders;

use App\Models\SocialProvider;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('file_types')
            ->insert([
                'type' => 'image',
                'created_at' => now(),
                'updated_at' => now(),
            ]);

        (new SocialProvider(['name' => 'github']))->save();
        (new SocialProvider(['name' => 'google']))->save();
    }
}
