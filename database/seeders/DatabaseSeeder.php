<?php

namespace Database\Seeders;

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
    }
}
