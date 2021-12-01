<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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

    public function patch_by_slug(Request $request, string $slug)
    {
        if(!$request->user()->admin) abort(403);
        try {
            $post = Post::where('slug', $slug)->first();

            if($request->has('title')) {
                $post->title = $request->input('title');
                $post->slug = Str::slug($post->title);
            }
            
            if($request->has('description')) {
                $post->description = $request->input('description');
            }
            
            if($request->has('markdown')) {
                $post->markdown = $request->input('markdown');
            }
            
            $post->save();

            return response()->json(['message' => 'Successfully edit post.']);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function create_new(Request $request)
    {
        $user = $request->user();
        if(!$user->admin) abort(403);
        try {
            $post = new Post();
            $post->user_id = $user->id;
            $post->cover_file_name = 'gambar-biner';

            if($request->has('title')) {
                $post->title = $request->input('title');
                $post->slug = Str::slug($post->title);
            }
            
            if($request->has('description')) {
                $post->description = $request->input('description');
            }
            
            if($request->has('markdown')) {
                $post->markdown = $request->input('markdown');
            }
            
            $post->save();

            return response()->json(['message' => 'Successfully add post.']);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
