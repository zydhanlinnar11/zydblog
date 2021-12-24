<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TokenController extends Controller
{
    private function authenticate(string $email, string $password): ?User
    {
        $user = User::where('email', $email)->first();

        if (!$user || !Hash::check($password, $user->password)) {
            return null;
        }
        
        return $user;
    }

    function login(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $request->validate([
                'email' => 'email|required|exists:App\Models\User,email',
                'password' => 'required',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            throw $e;
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Internal server error. Please try again later.",
            ], 500);
        }
        
        $user = $this->authenticate($request->input('email'), $request->input('password'));

        if(!$user) return response()->json(['message' => 'Wrong password.'], 401);

        return response()->json(['message' => 'Authenticated.','token' => $user->generate_access_token()->plainTextToken]);
    }

    function register(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $request->validate([
                'name' => 'required',
                'email' => 'email|required|unique:App\Models\User,email',
                'username' => 'required|unique:App\Models\User,username',
                'password' => 'required|confirmed',
                'password_confirmation' => 'required',
            ]);
            User::create([
                'username' => $request->input('username'),
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            throw $e;
        } catch (\Exception $e) {
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
