<?php

namespace Tests\Feature;

use App\Models\Post;
use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
use Illuminate\Support\Str;

class PostTest extends TestCase
{
    private $post = [
        "title" => "Test post 1",
        "description" => "Test description 1",
        "markdown" => "Test content"
    ];
    private $post2 = [
        "title" => "Test post 2",
        "description" => "Test description 2",
        "markdown" => "Test content"
    ];

    public function test_cant_create_post_if_not_login()
    {
        $response = $this->postJson('/posts', $this->post);

        $response->assertUnauthorized();
    }
    
    public function test_cant_create_post_if_not_admin()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, []);

        $response = $this->postJson('/posts', $this->post);

        $response->assertForbidden();
        $user->delete();
    }
    
    public function test_can_create_post_if_admin()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['create-post']);

        $response = $this->postJson('/posts', $this->post);
        $response->assertOk();

        $response = $this->postJson('/posts', $this->post2);
        $response->assertOk();
        // $user->delete();
    }
    
    public function test_cant_create_post_if_title_is_not_unique()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['create-post']);

        $response = $this->postJson('/posts', $this->post);
        $response->assertUnprocessable();

        $response = $this->postJson('/posts', $this->post2);
        $response->assertUnprocessable();
        $user->delete();
    }
    
    public function test_cant_create_post_if_title_or_description_or_markdown_is_empty()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['create-post']);

        $response = $this->postJson('/posts', [
            'title' => '',
            'description' => 'aa',
            'markdown' => 'xx',
        ]);

        $response->assertUnprocessable();

        $response = $this->postJson('/posts', [
            'title' => 'aa',
            'description' => '',
            'markdown' => 'xx',
        ]);

        $response->assertUnprocessable();

        $response = $this->postJson('/posts', [
            'title' => 'xx',
            'description' => 'aa',
            'markdown' => '',
        ]);

        $response->assertUnprocessable();
        $user->delete();
    }
    
    public function test_return_all_posts()
    {
        $response = $this->get('/posts');

        $response->assertOk();
    }
    
    public function test_return_single_posts()
    {
        $response = $this->get('/posts/' . Str::slug($this->post['title']));

        $response->assertOk();
    }

    public function test_cant_update_post_if_not_login()
    {
        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), $this->post);

        $response->assertUnauthorized();
    }
    
    public function test_cant_update_post_if_not_admin()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, []);

        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), $this->post);

        $response->assertForbidden();
        $user->delete();
    }
    
    public function test_cant_update_post_if_not_found()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, []);

        $response = $this->putJson('/posts/not-found', $this->post);

        $response->assertNotFound();
        $user->delete();
    }
    
    public function test_can_update_post_if_admin()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['update-post']);

        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), $this->post);

        $response->assertOk();
        $user->delete();
    }
    
    public function test_cant_update_post_if_title_or_description_or_markdown_is_empty()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['update-post']);

        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), [
            'title' => '',
            'description' => 'aa',
            'markdown' => 'xx',
        ]);

        $response->assertUnprocessable();

        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), [
            'title' => 'aa',
            'description' => '',
            'markdown' => 'xx',
        ]);

        $response->assertUnprocessable();

        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), [
            'title' => 'xx',
            'description' => 'aa',
            'markdown' => '',
        ]);

        $response->assertUnprocessable();
        $user->delete();
    }
    
    public function test_can_update_post_if_title_is_identical_with_current()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['update-post']);

        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), $this->post);

        $response->assertOk();
        $user->delete();
    }
    
    public function test_cant_update_post_if_title_is_identical_with_other()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['update-post']);

        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), $this->post2);

        $response->assertUnprocessable();
        $user->delete();
    }
    
    public function test_return_404_single_posts_if_not_found()
    {
        $response = $this->get('/posts/not-found');

        $response->assertNotFound();
    }
    
    public function test_cant_delete_post_if_not_login()
    {
        $response = $this->deleteJson('/posts/' . Str::slug($this->post['title']));

        $response->assertUnauthorized();
    }
    
    public function test_cant_delete_post_if_not_admin()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, []);

        $response = $this->deleteJson('/posts/' . Str::slug($this->post['title']));

        $response->assertForbidden();
        $user->delete();
    }
    
    public function test_cant_delete_post_if_post_not_found()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['delete-post']);

        $response = $this->deleteJson('/posts/test-post-not-found');

        $response->assertNotFound();
        $user->delete();
    }
    
    public function test_can_delete_post_if_admin()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['delete-post']);

        $response = $this->deleteJson('/posts/' . Str::slug($this->post['title']));

        $response->assertOk();

        $response = $this->deleteJson('/posts/' . Str::slug($this->post2['title']));

        $response->assertOk();
        $user->delete();
    }
}
