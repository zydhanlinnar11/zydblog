<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function get_by_id(string $id)
    {
        try {
            $result = DB::table('users')
                ->select([
                    'name',
                    'username',
                ])->where('id', '=', $id)
                ->get();
            if(!$result) {
                return response()->json(['message' => 'User not found.'], 404);
            }
            return $result[0];
        } catch(Exception $e) {
                return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
