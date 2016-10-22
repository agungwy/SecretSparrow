<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\TwitterAuthModel;
use App\TwitterModel;
use Socialite;
use App\User;
use App\WorkModel;
use J7mbo\TwitterAPIPHP\TwitterAPIExchange;


class TwitterAuthController extends Controller
{
    //
//     public function redirectToProvider()
//     {
//         // $GLOBALS['username']=$username;
//         return Socialite::driver('twitter')->redirect();
//     }  
//     public function handleProviderCallback()
//     {
//         try {
//             $user = Socialite::driver('twitter')->user();
            
//         } catch (Exception $e) {
//             return redirect('auth/twitter');
//         }
        
        
 
//         $authUser = $this->findOrCreateUser($user);
 
// //        Auth::login($authUser, true);
//         $accessToken = $user->token; //to get token
//         $accessTokenSecret = $user->tokenSecret; //to get token secret
//         $email=$user->email;
        
        
        
//         $todos=TwitterModel::where('handle',$authUser->handle);
        
//         if(count($todos->get())==0){
//             //new user
//             TwitterModel::create([
//                 'handle'=>$authUser->handle,
//                 'access_token' => $accessToken,
//                 'access_token_secret' => $accessTokenSecret,
//             ]);
//         }else{
//             //existing user
//             //check if the stored token still the same or not with the generated token from Twitter
//             $todos->where('access_token','=',$accessToken)
//                   ->where('access_token_secret','=',$accessTokenSecret);
//             if(count($todos->get())==0){
//                 //existing user with different token, update them
//                 $todos2=TwitterModel::where('handle',$authUser->handle)
//                                     ->update(["access_token"=>$accessToken,"access_token_secret"=>$accessTokenSecret]);
//             }
//         }
        
// //        echo ($accessToken."<br>");
// //        echo ($accessTokenSecret."<br>");
// //        return redirect()->route('home');
// //        echo($email);
//         return [
//             "access_token"=>$accessToken,
//             "token_secret"=>$accessTokenSecret,
//             "auth_data"=>$authUser
//         ];
//     }
    private function findOrCreateUser($twitterUser)
    {
        $authUser = TwitterAuthModel::where('twitter_id', $twitterUser['twitter']['user_id'])->first();
       
        if ($authUser){
            //account exists
            return $authUser;
        }
        $user=$this->user($twitterUser['twitter']['screen_name'], $twitterUser['twitter']['oauth_token'],$twitterUser['twitter']['oauth_token_secret']);

        return TwitterAuthModel::create([
            'user_id' => $twitterUser['ss_user_id'],
            'name' => $user['name'],
            'handle' => $twitterUser['twitter']['screen_name'],
            'twitter_id' => $twitterUser['twitter']['user_id'],
            'avatar' => $user['profile_image_url_https']
        ]);
    }
    private function settings($accessToken, $accessTokenSecret){
        /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
        $settings = array(
            'oauth_access_token' => $accessToken,
            'oauth_access_token_secret' => $accessTokenSecret,
            'consumer_key' => env("TWITTER_CLIENT_ID"),
            'consumer_secret' => env("TWITTER_CLIENT_SECRET")
        );
        return $settings;
    }
    private function user($handle,$accessToken,$accessTokenSecret){
       
        $url = 'https://api.twitter.com/1.1/users/show.json';
        $getfield = '?screen_name='.$handle;
        $requestMethod = 'GET';
    
        
        $twitter = new TwitterAPIExchange($this->settings($accessToken,$accessTokenSecret));
        $results = $twitter->setGetfield($getfield)
                        ->buildOauth($url, $requestMethod)
                        ->performRequest();  
        
        return $results;  

    }

    public function registerTwitter(Request $request){
        $data=$request->all();
        $todos=User::find($data['ss_user_id']);
        if(count($todos)>0){
            $authUser=$this->findOrCreateUser($data);
            if($authUser->user_id==$data['ss_user_id']){
                $accessToken=$data['twitter']["oauth_token"];
                $accessTokenSecret=$data['twitter']["oauth_token_secret"];
                $todos=TwitterModel::where('handle',$authUser->handle);
                if(count($todos->get())==0){
                    //new user
                    TwitterModel::create([
                        'handle'=>$authUser->handle,
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
                        $todos2=TwitterModel::where('handle',$authUser->handle)
                                            ->update(["access_token"=>$accessToken,"access_token_secret"=>$accessTokenSecret]);
                    }
                }
                return response()->json(['message'=>'Success'],201);
            }else{
                return response()->json(['message'=>'Twitter account has been used'],403);
            }
        }else{
            return response()->json(['messages'=>'Not Found'],404);
        }
    }
    public function getTwitterDetail(Request $request){
        $data=$request->all();
        if(array_key_exists("user_id", $data)){
            $todos=TwitterAuthModel::where('user_id',$data['user_id'])->first();
            if(count($todos)>0){
                $numCrowdies=WorkModel::where('handle',$todos->handle)->get();
                $todos->crowdies=count($numCrowdies);
                $todos->interestedIn;
                $app=app('App\Http\Controllers\TwitterAPIController')->user(new Request(["handle"=>$todos->handle]));
				$todos->following=$app["friends_count"];
              	$todos->follower=$app["followers_count"];
                return [$todos];
            }else{
                return response()->json(['message'=>'Not Found'],404);
            }
        }else if(array_key_exists("handle", $data)){
            $todos=TwitterAuthModel::where('handle',$data['handle'])->first();
            if(count($todos)>0){
                $numCrowdies=WorkModel::where('handle',$data['handle'])->get();
                $todos->crowdies=count($numCrowdies);
                $todos->interestedIn;
                $app=app('App\Http\Controllers\TwitterAPIController')->user(new Request(["handle"=>$todos->handle]));
				$todos->following=$app["friends_count"];
              	$todos->follower=$app["followers_count"];
                return [$todos];
            }else{
                return response()->json(['message'=>'Not Found'],404);
            }
        }
    }

}
