<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function readMany(Request $request) {
        return DB::table('posts')
            ->select([
                'title', 'slug', 'created_at', 'coverFilename', 'description'
            ])->orderByDesc('created_at')
            ->get();
    }
}
