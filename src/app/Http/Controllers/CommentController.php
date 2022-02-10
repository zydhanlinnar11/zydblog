<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
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
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function index(Post $post)
    {
        return CommentResource::collection($post->comments()->orderByDesc('created_at')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Models\Post  $post
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Post $post, Request $request)
    {
        $request->merge([
            'user_id' => $request->user()->id,
            'post_id' => $post->id,
        ]);

        $validated_data = $request->validate([
            'content' => 'required|max:65535',
            'user_id' => 'required|exists:users,id',
            'post_id' => 'required|exists:posts,id',
        ]);

        $comment = Comment::create($validated_data);

        return response()->json(new CommentResource($comment));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Post  $post
     * @param  \App\Models\Comment  $comment
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Post $post, Comment $comment, Request $request)
    {
        if($comment->user()->first()->id !== $request->user()->id) abort(403);

        $validated_data = $request->validate([
            'content' => 'required|max:65535',
        ]);

        $comment->update($validated_data);

        return response()->json(new CommentResource($comment));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @param  \App\Models\Comment  $comment
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post, Comment $comment, Request $request)
    {
        if(!$request->user()->tokenCan('delete-other-people-comment') && $comment->user()->first()->id !== $request->user()->id) abort(403);

        $comment->delete();
        
        return response()->json('true');
    }
}
