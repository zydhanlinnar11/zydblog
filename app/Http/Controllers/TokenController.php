<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TokenController extends Controller
{
    private function authenticate(Request $request): ?User
    {
        $user = User::where('email', $request->input('email'))->firstOrFail();

        if (!Hash::check($request->input('password'), $user->password)) {
            return null;
        }
        
        return $user;
    }

    function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = $this->authenticate($request);

        if(!$user) {
            return response()->json([
                'message' => 'Unauthenticated.'
            ], 401);
        }

        $token = $user->createToken('web-auth');

        return response()->json([
            'message' => 'Authenticated.',
            'token' => $token->plainTextToken
        ]);
    }

    function register(Request $request): \Illuminate\Http\JsonResponse
    {
        if(trim($request->input('name')) === '') {
            return response()->json([
                'message' => "Name can't be empty.",
            ], 400);
        }
        if(trim($request->input('email')) === '') {
            return response()->json([
                'message' => "Email can't be empty.",
            ], 400);
        }
        if(trim($request->input('password')) === '') {
            return response()->json([
                'message' => "Password can't be empty.",
            ], 400);
        }

        try {
            User::create([
                'username' => $request->input('username'),
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);
        } catch(Exception $e) {
            return response()->json([
                'message' => "Internal server error. Please try again later.",
            ], 500);
        }

        return response()->json([
            'message' => 'Successfully create user.',
        ]);
    }

    function logout(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out.'
        ]);
    }
}
