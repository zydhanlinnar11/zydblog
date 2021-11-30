<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function home_posts()
    {
        return DB::table('posts', 'p')
            ->select([
                'p.title',
                'p.slug',
                'p.created_at',
                'p.description',
                'f.cover_url'
            ])->leftJoinSub(
                DB::table('files', 'f')
                ->select(['url as cover_url', 'file_name']),
                'f',
                'f.file_name',
                '=',
                'p.cover_file_name'
            )
            ->orderByDesc('created_at')
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
                'markdown',
                'description',
                'user_id',
            ])->where('slug', '=', $slug)
            ->get();
            if(!$result) {
                return response()->json(['message' => 'Post not found.'], 404);
            }
            return $result[0];
        } catch(Exception $e) {
                return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
