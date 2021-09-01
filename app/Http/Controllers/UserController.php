<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function get_by_id(string $id)
    {
        return DB::table('users')
            ->select([
                'name',
                'username',
            ])->where('id', '=', $id)
            ->get();
    }
}
