<?php

namespace App\Services\Auth;

use App\Models\User;
use Illuminate\Auth\GuardHelpers;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ZydhanWebGuard implements Guard
{
    use GuardHelpers;

    /**
     * The request instance.
     *
     * @var \Illuminate\Http\Request
     */
    protected $request;

    /**
     * Create a new authentication guard.
     *
     * @param  \Illuminate\Contracts\Auth\UserProvider  $provider
     * @param  \Illuminate\Http\Request  $request
     * @param  bool  $hash
     * @return void
     */
    public function __construct(
        UserProvider $provider,
        Request $request,
    ) {
        $this->provider = $provider;
        $this->request = $request;
    }

    /**
     * Get the currently authenticated user.
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function user() {
        $response = Http::withHeaders([
            'accept' => 'application/json',
            'referer' => env('USER_FRONTEND_URL'),
            'cookie' => env('USER_COOKIE_NAME').'='.$this->request->cookie(env('USER_COOKIE_NAME'))
        ]);
        if(env('APP_ENV') !== 'production') {
            $response = $response->withOptions(['verify' => false]);
        }
        $response = $response->get(env('USER_API_URL'));
        return User::where('email', $response->json()['email'])->first();
    }

    /**
     * Validate a user's credentials.
     *
     * @param  array  $credentials
     * @return bool
     */
    public function validate(array $credentials = [])
    {
        $user = $this->provider->retrieveByCredentials($credentials);

        return !is_null($user);
    }
}