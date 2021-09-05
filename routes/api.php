<?php

use App\Http\Controllers\FileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TokenController;
use App\Http\Controllers\UserController;
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

Route::get('/posts', [PostController::class, 'home_posts']);

Route::get('/post/{slug:string}', [PostController::class, 'get_by_slug']);

Route::get('/user/{id:uuid}', [UserController::class, 'get_by_id']);

Route::get('/file/{name:string}', [FileController::class, 'get_by_name']);

Route::post('/login', [TokenController::class, 'login']);

Route::middleware('auth:sanctum')->delete('/logout', [TokenController::class, 'logout']);
