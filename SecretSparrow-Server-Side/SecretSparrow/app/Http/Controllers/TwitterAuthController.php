<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\TwitterAuthModel;
use App\TwitterModel;
use Socialite;

class TwitterAuthController extends Controller
{
    //
    public function redirectToProvider()
    {
        return Socialite::driver('twitter')->redirect();
    }  
    public function handleProviderCallback()
    {
        try {
            $user = Socialite::driver('twitter')->user();
            
        } catch (Exception $e) {
            return redirect('auth/twitter');
        }
        
        
 
        $authUser = $this->findOrCreateUser($user);
 
//        Auth::login($authUser, true);
        $accessToken = $user->token; //to get token
        $accessTokenSecret = $user->tokenSecret; //to get token secret
        
        
        
        $todos=TwitterModel::where('handle','=',$authUser->pluck('handle')[0]);
        
        if(count($todos->get())==0){
            //new user
            TwitterModel::create([
                'user_id' => $authUser->pluck('user_id')[0],
                'handle'=>$authUser->pluck('handle')[0],
                'access_token' => $accessToken,
                'access_token_secret' => $accessTokenSecret,
            ]);
        }else{
            //existing user
            //check if the stored token still the same or not with the generated token from Twitter
            $todos->where('access_token','=',$accessToken)
                  ->where('access_token_secret','=',$accessTokenSecret);
            if(count($todos->get())==0){
                //existing user with different token, update them
                $todos->update(["access_token"=>$accessToken,"access_token_secret"=>$accessTokenSecret]);
            }
        }
        
//        echo ($accessToken."<br>");
//        echo ($accessTokenSecret."<br>");
//        return redirect()->route('home');
        
        return [
            "access_token"=>$accessToken,
            "token_secret"=>$accessTokenSecret,
            "auth_data"=>$authUser
        ];
    }
    private function findOrCreateUser($twitterUser)
    {
        $authUser = TwitterAuthModel::where('twitter_id', $twitterUser->id)->first();
 
        if ($authUser){
            return $authUser;
        }
 
        return TwitterAuthModel::create([
            'user_id' => uniqid($twitterUser->nickname,true),
            'name' => $twitterUser->name,
            'handle' => $twitterUser->nickname,
            'twitter_id' => $twitterUser->id,
            'avatar' => $twitterUser->avatar_original
        ]);
    }

}
