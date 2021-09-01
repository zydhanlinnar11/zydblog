<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function home_posts()
    {
        return DB::table('posts')
            ->select([
                'title',
                'slug',
                'created_at',
                'cover_file_name',
                'description'
            ])->orderByDesc('created_at')
            ->get();
    }

    public function get_by_slug(string $slug)
    {
        try {
            $result = DB::table('posts')
            ->select([
                'title',
                'created_at',
                'cover_file_name',
                'sanitized_html',
                'user_id',
            ])->where('slug', '=', $slug)
            ->get();
            if(!$result) {
                return response()->json(['message' => 'Post not found.'], 404);
            }
            return $result[0];
        } catch(Exception $e) {
                return response()->json(['message' => $e->getMessage()], 404);
        }
    }
}
