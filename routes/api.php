<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\SocialProviderController;
use App\Http\Controllers\TokenController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/auth/{social_provider}/redirect', [SocialProviderController::class, 'redirect']);
Route::get('/auth/{social_provider}/callback', [SocialProviderController::class, 'callback']);

Route::apiResources([
    'posts' => PostController::class,
]);

// Route::get('/posts', [PostController::class, 'home_posts']);

// Route::middleware('auth:sanctum')->post('/posts', [PostController::class, 'create_new']);

// Route::get('/post/{slug:string}', [PostController::class, 'get_by_slug']);

// Route::middleware('auth:sanctum')->patch('/post/{slug:string}', [PostController::class, 'patch_by_slug']);

// Route::middleware('auth:sanctum')->delete('/post/{slug:string}', [PostController::class, 'delete']);

// Route::get('/user/{id:uuid}', [UserController::class, 'get_by_id']);

// Route::get('/file/{name:string}', [FileController::class, 'get_by_name']);

Route::post('/login', [TokenController::class, 'login']);

Route::post('/register', [TokenController::class, 'register']);

Route::middleware('auth:sanctum')->delete('/logout', [TokenController::class, 'logout']);
