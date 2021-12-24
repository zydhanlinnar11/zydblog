<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostCollection;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PostController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index', 'show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return PostResource::collection(Post::orderByDesc('created_at')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StorePostRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StorePostRequest $request)
    {
        $post = new Post($request->validated());
        $post->save();

        return response()->json(['slug' => $post->slug]);
    }

    /**
     * Display the specified resource.
     *
     * @param  Post  $post
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Post $post)
    {
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Post  $post
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Post $post)
    {
        if (!$request->user()->tokenCan('update-post')) {
            abort(403, 'Forbidden');
        }

        $request->merge([
            'slug' => \Illuminate\Support\Str::slug($request->input('title')),
            'updated_at' => now(),
            'cover_file_name' => 'cover',
        ]);

        $validated_data = $request->validate([
            'title' => ['required', 'max:64', Rule::unique('posts')->ignore($post)],
            'slug' => ['required', 'max:255', Rule::unique('posts')->ignore($post)],
            'description' => 'required|max:255',
            'markdown' => 'required|max:65535',
            'cover_file_name' => 'required',
            'updated_at' => 'required',
        ]);

        $post->update($validated_data);

        return response()->json(['slug' => $post->slug]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Post  $post
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request, Post $post)
    {
        if (!$request->user()->tokenCan('delete-post')) {
            abort(403, 'Forbidden');
        }

        $post->delete();
    }
}
