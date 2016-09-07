<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TwitterModel;
use App\SentFollowingRequestModel;
use J7mbo\TwitterAPIPHP\TwitterAPIExchange;
use App\Http\Requests;
use Carbon\Carbon;


class TwitterAPIController extends Controller
{
    //
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
    
    public function getFollowers(Request $request){
//        for getting the list of followers for specfic user (declared as screen_name)
        $data= $request->all();
        $url = 'https://api.twitter.com/1.1/followers/list.json';
        $getfield = '?screen_name='.$data["screen_name"].'&skip_status=1&count=100';
        $requestMethod = 'GET';
        $todos= TwitterModel::where('handle','=',$data["handle"]);
        
        $twitter = new TwitterAPIExchange($this->settings($todos->pluck('access_token')[0],$todos->pluck('access_token_secret')[0]));
        $results = $twitter->setGetfield($getfield)
                           ->buildOauth($url, $requestMethod)
                           ->performRequest();
        
        $screen_names='';
        for ($i=0; $i<count($results['users']);$i++){
            $screen_name=$results['users'][$i]['screen_name'];
            if($i!==count($results['users'])-1){
                $screen_names.=$screen_name.',';
            }else{
                $screen_names.=$screen_name;
            }
        }

        
        $urlLookup = 'https://api.twitter.com/1.1/friendships/lookup.json';
        $getfieldLookup = '?screen_name='.$screen_names.'&skip_status=1&count=100';
        $resultsLookup = $twitter->setGetfield($getfieldLookup)
                                 ->buildOauth($urlLookup, $requestMethod)
                                 ->performRequest();

        // print_r($resultsLookup);
        
        $names_temp=array();
        foreach($resultsLookup as $lookup){
            $connections=$lookup['connections'];
            foreach($connections as $connection){
                if($connection=='none'){
                    $names_temp[$lookup['screen_name']]=$connection;
                }
            }
        }

        // print_r($resultsLookup);
        // print_r($names_temp);
        
        $temp=array();
        $temp1=array();
        foreach($results['users'] as $result){
            if($result['following']==false && $result['follow_request_sent']==false 
                && $result['blocked_by']==false && $result['blocking']==false 
                && $result['screen_name']!==$data['handle'] && array_key_exists($result['screen_name'], $names_temp)){
                    array_push($temp1,$result);          
            }
        }
        $temp['users']=$temp1; 
        return $temp;  
    }
    public function getFollowing(Request $request){
//        for getting the list of specfic user's friends (declared as screen_name)
        $data= $request->all();
        $url = 'https://api.twitter.com/1.1/friends/list.json';
        $getfield = '?screen_name='.$data["screen_name"].'&skip_status=1&count=20';
        $requestMethod = 'GET';
        
        $todos= TwitterModel::where('handle','=',$data["handle"]);
        
        $twitter = new TwitterAPIExchange($this->settings($todos->pluck('access_token')[0],$todos->pluck('access_token_secret')[0]));
        $results = $twitter->setGetfield($getfield)
                     ->buildOauth($url, $requestMethod)
                     ->performRequest();  
        $temp=array();
        $temp1=array();
        foreach($results['users'] as $result){
            if($result['verified']==true){
                    array_push($temp1,$result);          
            }
        }
        $temp['users']=$temp1; 
        return $temp;  
    }
    public function follow(Request $request){
//        for getting the list of specfic user's friends (declared as screen_name)
        $data= $request->all();
        $url = 'https://api.twitter.com/1.1/friendships/create.json';
        $postfields = array(
            'screen_name' => $data['screen_name'], 
            'follow' => true
        );
        $requestMethod = 'POST';
        
        $todos= TwitterModel::where('handle','=',$data["handle"]);
        
        $twitter = new TwitterAPIExchange($this->settings($todos->pluck('access_token')[0],$todos->pluck('access_token_secret')[0]));
        $results = $twitter->buildOauth($url, $requestMethod)
                       ->setPostfields($postfields)
                       ->performRequest(); 

        SentFollowingRequestModel::create([
                'crowdies_id'=>$data['user_id'],
                'handle'=>$data['handle'],
                'twitter_id'=>$results['id'],
                'twitter_id_str'=>$results['id_str'],
                'name'=>$results['name'],
                'profile_image_url'=>$results['profile_image_url'],
                'profile_image_url_https'=>$results['profile_image_url_https'],
                'screen_name'=>$results['screen_name'],
                'followers_count'=>$results['followers_count'],
                'friends_count'=>$results['friends_count'],
                'followed_back'=>false,
            ]);
        return $results;
    }
    public function unfollow(Request $request){
//        for getting the list of specfic user's friends (declared as screen_name)
        $data= $request->all();
        $url = 'https://api.twitter.com/1.1/friendships/destroy.json';
        $postfields = array(
            'screen_name' => $data['screen_name']
        );
        $requestMethod = 'POST';
        
        $todos= TwitterModel::where('handle','=',$data["handle"]);
        
        $twitter = new TwitterAPIExchange($this->settings($todos->pluck('access_token')[0],$todos->pluck('access_token_secret')[0]));
        $results = $twitter->buildOauth($url, $requestMethod)
                       ->setPostfields($postfields)
                       ->performRequest();  
        $todos = SentFollowingRequestModel::where('crowdies_id',$data['user_id'])
                                           ->where('handle',$data['handle'])
                                           ->where('screen_name',$data['screen_name']);
        $todos->delete();
        return $results;
    }
    public function getFriendshipsStatus(Request $request){
//        for getting the list of followers for specfic user (declared as screen_name)
        $data= $request->all();
        
        $todos2P= SentFollowingRequestModel::where('crowdies_id',$data['user_id']);

        $todos2= $todos2P->where('followed_back',false);
        $screen_names='';
        $todo=$todos2->get();
        for($i=0; $i<count($todo) ;$i++){

            if($i!==(count($todo)-1)){
                $screen_names.= $todo[$i]->screen_name.',';
            }else{
                $screen_names.= $todo[$i]->screen_name;
            }
        }
        // echo($screen_names);
        //retrieve screen_name relations (hoping for followed_by)
        if($screen_names!==''){
            $url = 'https://api.twitter.com/1.1/friendships/lookup.json';
            $getfield = '?screen_name='.$screen_names;
            $requestMethod = 'GET';
            $todos= TwitterModel::where('handle','=',$data["handle"]);
            
            $twitter = new TwitterAPIExchange($this->settings($todos->pluck('access_token')[0],$todos->pluck('access_token_secret')[0]));
            $results = $twitter->setGetfield($getfield)
                               ->buildOauth($url, $requestMethod)
                               ->performRequest();

            //for updating the followed_back status
            foreach($results as $result){
                // print_r($result);
                $connections=$result['connections'];
                // print_r($connections);
                foreach($connections as $connection){
                    // echo $connection;
                    if($connection==="followed_by"){
                        SentFollowingRequestModel::where('crowdies_id',$data['user_id'])
                                                 ->where('screen_name',$result['screen_name'])
                                                 ->update(['followed_back'=>true]);
                    }
                }
            }
            if(count($todos2P->get())>0){
                //check if all followings hasn't been followed back
                $todos3P=$todos2P->get();
                foreach($todos3P as $todo3P){
                    $created_at=strtotime($todo3P->created_at);
                    $todo3P->days=(Carbon::now()->day)-date('d',$created_at); 
                }
                return $todos3P; 
            }else{
                //all
                return ['message'=>'Congratulations! All the accounts have followed back the business owner.'];
            } 
        }else{
            return response()->json(['message'=>'NOT FOUND'],200);
        }
            
    }
    public function refreshStatus(Request $request){
//        for getting the list of followers for specfic user (declared as screen_name)
        $data= $request->all();
        $url = 'https://api.twitter.com/1.1/followers/ids.json';
        
        $requestMethod = 'GET';

        $getBOInWorks=SentFollowingRequestModel::where('followed_back',false)->get();

        $tmp=array();
//        $num=0;
        foreach($getBOInWorks as $getBOInWork){
            // print_r($getBOInWork);
            array_push($tmp,strtolower($getBOInWork->handle));
        }
        $newTmp=array_unique($tmp);
      
        // print_r($newTmp);
        
        $temp2=array();
        foreach($newTmp as $x){
            
            $temp1=array();
            // $x='williamhenry_94';
            $todos= TwitterModel::find($x);
            $getfield = '?screen_name='.$x.'&skip_status=1&count=20';
        //     // echo $todos['access_token'];
            $twitter = new TwitterAPIExchange($this->settings($todos['access_token'],$todos['access_token_secret']));
            $results = $twitter->setGetfield($getfield)
                               ->buildOauth($url, $requestMethod)
                               ->performRequest();

            $ids=$results['ids'];
            foreach($ids as $id){
                // echo($id);
                $temp=array();
                $todos2=SentFollowingRequestModel::where('handle',$x)
                                                 ->where('twitter_id',$id)
                                                 ->where('followed_back',false)
                                                 ->get();
                if(count($todos2)>0){
                    // array_push($temp,$id);
                    $unique=$x.",".$id.",".($todos2->pluck('created_at')[0]);
                    $temp1['id']=hash('crc32',$unique);
                    $temp1['handle']=strtolower($x);
                    $temp1['ids']=$id;
                    array_push($temp2,$temp1);
//                    $num++;
                }

            }
            
        }
        // array_unique($temp2);
        // $temp['users']=$temp2; 
        return $temp2;  
  
    }
}
