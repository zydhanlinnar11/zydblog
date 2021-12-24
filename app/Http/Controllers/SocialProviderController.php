<?php

namespace App\Http\Controllers;

use App\Models\SocialProvider;
use App\Models\User;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class SocialProviderController extends Controller
{
    function callback(SocialProvider $social_provider) {
        Cookie::expire('token');
        $social_user = Socialite::driver($social_provider->name)->stateless()->user();
        $user = User::where('email', $social_user->getEmail())->first();

        if(!$user) {
            $user = User::create([
                'username' => $social_user->getNickname() ?? $social_user->getEmail(),
                'name' => $social_user->getName(),
                'email' => $social_user->getEmail(),
                'password' => Hash::make(Str::random()),
            ]);
        }
        
        return response()->redirectTo(env('BLOG_URL', 'https://blog.zydhan.xyz'))->cookie(
            'token',
            $user->generate_access_token()->plainTextToken,
            0,
            '/',
            env('SESSION_DOMAIN'),
            false,
            false
        );
    }

    function redirect(SocialProvider $social_provider) {
        return Socialite::driver($social_provider->name)->stateless()->redirect();
    }
}
