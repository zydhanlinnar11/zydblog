<?php

namespace Tests\Feature;

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
        Sanctum::actingAs(User::factory()->create(), []);

        $response = $this->postJson('/posts', $this->post);

        $response->assertForbidden();
    }
    
    public function test_can_create_post_if_admin()
    {
        Sanctum::actingAs(User::factory()->create(), ['create-post']);

        $response = $this->postJson('/posts', $this->post);
        $response->assertOk();

        $response = $this->postJson('/posts', $this->post2);
        $response->assertOk();
    }
    
    public function test_cant_create_post_if_title_is_not_unique()
    {
        Sanctum::actingAs(User::factory()->create(), ['create-post']);

        $response = $this->postJson('/posts', $this->post);
        $response->assertUnprocessable();

        $response = $this->postJson('/posts', $this->post2);
        $response->assertUnprocessable();
    }
    
    public function test_cant_create_post_if_title_or_description_or_markdown_is_empty()
    {
        Sanctum::actingAs(User::factory()->create(), ['create-post']);

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
        Sanctum::actingAs(User::factory()->create(), []);

        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), $this->post);

        $response->assertForbidden();
    }
    
    public function test_cant_update_post_if_not_found()
    {
        Sanctum::actingAs(User::factory()->create(), []);

        $response = $this->putJson('/posts/not-found', $this->post);

        $response->assertNotFound();
    }
    
    public function test_can_update_post_if_admin()
    {
        Sanctum::actingAs(User::factory()->create(), ['update-post']);

        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), $this->post);

        $response->assertOk();
    }
    
    public function test_cant_update_post_if_title_or_description_or_markdown_is_empty()
    {
        Sanctum::actingAs(User::factory()->create(), ['update-post']);

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
    }
    
    public function test_can_update_post_if_title_is_identical_with_current()
    {
        Sanctum::actingAs(User::factory()->create(), ['update-post']);

        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), $this->post);

        $response->assertOk();
    }
    
    public function test_cant_update_post_if_title_is_identical_with_other()
    {
        Sanctum::actingAs(User::factory()->create(), ['update-post']);

        $response = $this->putJson('/posts/' . Str::slug($this->post['title']), $this->post2);

        $response->assertUnprocessable();
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
        Sanctum::actingAs(User::factory()->create(), []);

        $response = $this->deleteJson('/posts/' . Str::slug($this->post['title']));

        $response->assertForbidden();
    }
    
    public function test_cant_delete_post_if_post_not_found()
    {
        Sanctum::actingAs(User::factory()->create(), ['delete-post']);

        $response = $this->deleteJson('/posts/test-post-not-found');

        $response->assertNotFound();
    }
    
    public function test_can_delete_post_if_admin()
    {
        Sanctum::actingAs(User::factory()->create(), ['delete-post']);

        $response = $this->deleteJson('/posts/' . Str::slug($this->post['title']));

        $response->assertOk();

        $response = $this->deleteJson('/posts/' . Str::slug($this->post2['title']));

        $response->assertOk();
    }
}
