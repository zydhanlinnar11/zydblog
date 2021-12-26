<?php

namespace Tests\Feature;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class PostVisibilityTest extends TestCase
{
    public function test_only_return_visible_posts_if_not_admin()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, []);
        Post::where('slug', 'unlisted-post')?->delete();
        Post::where('slug', 'private-post')?->delete();
        $unlisted_post = Post::create([
            "title" => "unlisted-post",
            "slug" => "unlisted-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_UNLISTED,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);
        $private_post = Post::create([
            "title" => "private-post",
            "slug" => "private-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_PRIVATE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);
        $response = $this->getJson('/posts');
        $response->assertStatus(200);
        $posts = $response->decodeResponseJson() ?? null;

        // if($posts) var_dump($posts);
        for ($i=0; $posts[$i] ?? null; $i++) {
            $this->assertFalse($posts[$i]['title'] === 'unlisted-post');
            $this->assertFalse($posts[$i]['title'] === 'private-post');
        }

        // var_dump($response->decodeResponseJson());

        $unlisted_post->delete();
        $private_post->delete();
        $user->delete();
    }

    public function test_return_all_posts_if_admin()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['view-unlisted-post', 'view-private-post']);
        Post::where('slug', 'unlisted-post')?->delete();
        Post::where('slug', 'private-post')?->delete();
        $unlisted_post = Post::create([
            "title" => "unlisted-post",
            "slug" => "unlisted-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_UNLISTED,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);
        $private_post = Post::create([
            "title" => "private-post",
            "slug" => "private-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_PRIVATE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);
        $response = $this->getJson('/posts');
        $response->assertStatus(200);
        $posts = $response->decodeResponseJson() ?? null;

        $title = [];
        for ($i=0; $posts[$i] ?? null; $i++) {
            array_push($title, $posts[$i]['title']);
        }
        $this->assertContains('unlisted-post', $title);
        $this->assertContains('private-post', $title);

        $unlisted_post->delete();
        $private_post->delete();
        $user->delete();
    }

    public function test_cant_view_private_post_if_not_admin()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, []);
        Post::where('slug', 'private-post')?->delete();
        $private_post = Post::create([
            "title" => "private-post",
            "slug" => "private-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_PRIVATE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);
        $response = $this->getJson('/posts/private-post');
        $response->assertNotFound();

        $private_post->delete();
        $user->delete();
    }

    public function test_can_view_private_post_if_admin()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['view-private-post']);
        Post::where('slug', 'private-post')?->delete();
        $private_post = Post::create([
            "title" => "private-post",
            "slug" => "private-post",
            "description" => "Test description 1",
            "markdown" => "Test content",
            "visibility" => Post::$VISIBILITY_PRIVATE,
            "user_id" => $user->id,
            "cover_file_name" => "ok"
        ]);
        $response = $this->getJson('/posts/private-post');
        $response->assertOk();
        $response->assertJson(["title" => "private-post"]);

        $private_post->delete();
        $user->delete();
    }
}
