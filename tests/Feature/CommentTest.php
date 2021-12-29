<?php

namespace Tests\Feature;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class CommentTest extends TestCase
{
    public function test_can_return_all_comment_belong_a_post()
    {
        Post::where('slug', 'test-post')->delete();
        
        $user = User::factory()->create();
        Sanctum::actingAs($user, []);
        $post = Post::create([
            "title" => "test-post",
            "slug" => "test-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_VISIBLE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);

        $comment = Comment::create([
            "user_id" => $user->id,
            "post_id" => $post->id,
            "content" => 'Test comment 1'
        ]);

        $response = $this->getJson('/posts/test-post/comments');
        $response->assertStatus(200);
        $response->assertJson([
            [
                "user_id" => $user->id,
                "post_id" => $post->id,
                "content" => 'Test comment 1'
            ]
        ]);

        $comment->delete();
        $post->delete();
        $user->delete();
    }

    public function test_can_add_comment_and_return_new_comment()
    {
        Post::where('slug', 'test-post')->delete();
        
        $user = User::factory()->create();
        Sanctum::actingAs($user, []);
        $post = Post::create([
            "title" => "test-post",
            "slug" => "test-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_VISIBLE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);

        $response = $this->postJson('/posts/test-post/comments', [
            "content" => 'Test comment 1'
        ]);
        $response->assertOk();
        $response->assertJsonStructure(['content', 'user_id', 'post_id', 'id', 'updated_at', 'created_at']);
        $this->assertTrue(Post::where('slug', 'test-post')->first() != null);

        $post->delete();
        $user->delete();
    }

    public function test_cannot_add_comment_without_login()
    {
        Post::where('slug', 'test-post')->delete();
        
        $user = User::factory()->create();
        $post = Post::create([
            "title" => "test-post",
            "slug" => "test-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_VISIBLE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);

        $response = $this->postJson('/posts/test-post/comments', [
            "content" => 'Test comment 1'
        ]);
        $response->assertUnauthorized();

        $post->delete();
        $user->delete();
    }

    public function test_cannot_delete_comment_without_login()
    {
        Post::where('slug', 'test-post')->delete();
        
        $user = User::factory()->create();
        $post = Post::create([
            "title" => "test-post",
            "slug" => "test-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_VISIBLE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);

        $comment = Comment::create([
            "user_id" => $user->id,
            "post_id" => $post->id,
            "content" => 'Test comment 1'
        ]);

        $response = $this->deleteJson('/comments/'.$comment->id);
        $response->assertUnauthorized();

        $comment->delete();
        $post->delete();
        $user->delete();
    }

    public function test_cannot_delete_other_people_comment_if_not_admin()
    {
        Post::where('slug', 'test-post')->delete();
        
        $user = User::factory()->create();
        $other_user = User::factory()->create();
        Sanctum::actingAs($other_user, []);
        $post = Post::create([
            "title" => "test-post",
            "slug" => "test-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_VISIBLE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);

        $comment = Comment::create([
            "user_id" => $user->id,
            "post_id" => $post->id,
            "content" => 'Test comment 1'
        ]);

        $response = $this->deleteJson('/comments/'.$comment->id);
        $response->assertForbidden();

        $comment->delete();
        $post->delete();
        $other_user->delete();
        $user->delete();
    }

    public function test_cannot_change_comment_without_login()
    {
        Post::where('slug', 'test-post')->delete();
        
        $user = User::factory()->create();
        $post = Post::create([
            "title" => "test-post",
            "slug" => "test-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_VISIBLE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);

        $comment = Comment::create([
            "user_id" => $user->id,
            "post_id" => $post->id,
            "content" => 'Test comment 1'
        ]);

        $response = $this->patchJson('/comments/'.$comment->id, [
            "content" => 'Test comment 1 updated'
        ]);
        $response->assertUnauthorized();

        $comment->delete();
        $post->delete();
        $user->delete();
    }

    public function test_cannot_change_other_people_comment()
    {
        Post::where('slug', 'test-post')->delete();
        
        $user = User::factory()->create();
        $other_user = User::factory()->create();
        Sanctum::actingAs($other_user, []);
        $post = Post::create([
            "title" => "test-post",
            "slug" => "test-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_VISIBLE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);

        $comment = Comment::create([
            "user_id" => $user->id,
            "post_id" => $post->id,
            "content" => 'Test comment 1'
        ]);

        $response = $this->patchJson('/comments/'.$comment->id, [
            "content" => 'Test comment 1 updated'
        ]);
        $response->assertForbidden();

        $comment->delete();
        $post->delete();
        $other_user->delete();
        $user->delete();
    }

    public function test_can_delete_other_people_comment_if_admin()
    {
        Post::where('slug', 'test-post')->delete();
        
        $user = User::factory()->create();
        $other_user = User::factory()->create();
        Sanctum::actingAs($other_user, ['delete-other-people-comment']);
        $post = Post::create([
            "title" => "test-post",
            "slug" => "test-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_VISIBLE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);

        $comment = Comment::create([
            "user_id" => $user->id,
            "post_id" => $post->id,
            "content" => 'Test comment 1'
        ]);

        $response = $this->deleteJson('/comments/'.$comment->id);
        $response->assertOk();

        $comment->delete();
        $post->delete();
        $other_user->delete();
        $user->delete();
    }
}
