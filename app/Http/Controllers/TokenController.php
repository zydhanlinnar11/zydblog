<?php

namespace App\Http\Controllers;

use App\Models\User;
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
            'message' => 'Authorized.',
            'token' => $token->plainTextToken
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
