<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TwitterModel;
use App\SentFollowingRequestModel;
use J7mbo\TwitterAPIPHP\TwitterAPIExchange;
use App\Http\Requests;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redis;
use MonkeyLearn;
// use App\AccountsModel;
// use App\HighProfilerModel;
use App\CursorModel;
use App\CrowdiesModel;


class TwitterAPIController extends Controller
{
    /*
        It handles the Twitter authentication procedures
    */
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
    /*
        Check if a cursor from Twitter is being used by a crowdie.
        If not, return empty list.
    */
    private function isUsed($handle, $screen_name, $cursor){
        $todos= CursorModel::where('handle',$handle)
                            ->where('screen_name',$screen_name)
                            ->where('cursor',$cursor);
        return $todos;
    }
    /*
        Get the list of followers from a specified high-profiler account.
    */
    private function callTwitter($screen_name,$handle,$cursor,$twitter,$requestMethod){
        // cache enging
        $redis = Redis::connection();
        $key=$screen_name.':'.$cursor;
        // check if the data exists in the memory
        // if not call Twitter
        if(is_null($redis->get($key))){
            $url = 'https://api.twitter.com/1.1/followers/list.json';
            $getfield = '?screen_name='.$screen_name.'&skip_status=1&count=100&cursor='.$cursor;
            $results = $twitter->setGetfield($getfield)
                           ->buildOauth($url, $requestMethod)
                           ->performRequest();

            $redis->set($key,json_encode($results));
            $redis->expire($key,240);
            return $results;

        }else{
            // if yes, just get it from memory
            $results=json_decode($redis->get($key),true);
            // print_r($results);
            return $results;
        }

        // $twitter = new TwitterAPIExchange($this->settings($todos->pluck('access_token')[0],$todos->pluck('access_token_secret')[0]));
        
    }

    private function checkRelationship($data,$results,$twitter,$requestMethod){
        // cache engine
        $redis=Redis::connection();
        // data should be in comma-separated string
        $screen_names='';
        for ($i=0; $i<count($results['users']);$i++){
            $screen_name=$results['users'][$i]['screen_name'];
            if($i!==count($results['users'])-1){
                $screen_names.=$screen_name.',';
            }else{
                $screen_names.=$screen_name;
            }
        }
        $key=$data["handle"].':'.$screen_names;
        $resultsLookup;
        // if the data doesn't exist in the cache, call twitter
        if(is_null($redis->get($key))){
        
            $urlLookup = 'https://api.twitter.com/1.1/friendships/lookup.json';
            $getfieldLookup = '?screen_name='.$screen_names.'&skip_status=1&count=100';
            $resultsLookup = $twitter->setGetfield($getfieldLookup)
                                     ->buildOauth($urlLookup, $requestMethod)
                                     ->performRequest();
            $redis->set($key,json_encode($resultsLookup));
            $redis->expire($key,240);
        }else{
            // if exist, grab the data from cache
            $resultsLookup=json_decode($redis->get($key),true);
        }

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
            //check in the crowdies working table ('SentFollowingRequest').
            $sentFollowingRequest=SentFollowingRequestModel::where('handle',$data["handle"])
                                                           ->where('screen_name',$result['screen_name'])
                                                           ->get();
            // check if the account hasn't been followed by any crowdies for a specific business owner
            // and the account shouldn't have any relations with the business owner account
            if($result['following']==false && $result['follow_request_sent']==false 
                && $result['blocked_by']==false && $result['blocking']==false 
                && $result['screen_name']!==$data['handle'] 
                && array_key_exists($result['screen_name'], $names_temp)
                && count($sentFollowingRequest)==0){
                    array_push($temp1,$result);          
            }
        }
        $temp['users']=$temp1; 
        $temp['next_cursor']=$results['next_cursor'];
        $temp['next_cursor_str']=$results['next_cursor_str'];
        $temp['previous_cursor']=$results['previous_cursor'];
        $temp['previous_cursor_str']=$results['previous_cursor_str'];
        return $temp;
    }

    /*
        Retrieve list of recommended account for crowdies to follow
    */
    
    
    public function getFollowers(Request $request){
//        for getting the list of followers for specfic user (declared as screen_name)
        $data= $request->all();
        $cursor=-1;
        $requestMethod = 'GET';
        $todos= TwitterModel::where('handle',$data['handle']);
        $twitter = new TwitterAPIExchange($this->settings($todos->pluck('access_token')[0],$todos->pluck('access_token_secret')[0]));
       
        //check if you have worked or not
        $todo0=CursorModel::where('handle',$data['handle'])
                          ->where('crowdies_id',$data['crowdies_id'])
                          ->where('occupied',true)
                          ->first();
        $checked;
        $usedCursor;
        if(count($todo0)>0){
            $usedCursor=$todo0->cursor;
        }
        

        $status=true;
        while($status){
            // echo('cursor'.$cursor);
            $pageCheck=$this->isUsed($data['handle'],$data['screen_name'],$cursor); // look for the existance of the page / cursor
            
            //if the page exists on the database

            if(count($pageCheck->get())>0){
                // echo("available");
                //get the occupation status
                $occupation=$this->isUsed($data['handle'],$data['screen_name'],$cursor);
                // print_r($occupation);
                // echo($occupation->pluck('occupied')[0]);
                if($cursor==0){
                    $results=array();
                    $status=false;
                }
                if($occupation->pluck('occupied')[0]){
                    // echo("occupied");
                    //if it is occupied go to the next cursor (page)
                    $nextCursor=$occupation->pluck('next_cursor')[0];
                    $cursor=$nextCursor;

                }else{
                    //if it is not occupied by anyone yet
                    //go change the occupation status and the crowdies_id
                    // echo("not occupied");
                    $results=$this->callTwitter($data['screen_name'],$data['handle'],$cursor,$twitter,$requestMethod);
                    $checked=$this->checkRelationship($data,$results,$twitter,$requestMethod);
                    if(count($checked)>0){
                        $changeData=CursorModel::where('handle',$data['handle'])
                                            ->where('screen_name',$data['screen_name'])
                                            ->where('occupied',false)
                                            ->where('cursor',$cursor)
                                            ->update(['crowdies_id'=>$data['crowdies_id'],'occupied'=>true]);
                        //if you have been working for a while 
                        if(count($todo0)>0){
                            //set the occupied status as false first then move on
                            CursorModel::where('crowdies_id',$data['crowdies_id'])
                                        ->where('occupied',true)
                                        ->where('cursor',$usedCursor)
                                        ->update(['occupied'=>false]);
                        }
                        
                        $status=false;
                    }else{
                        $cursor=$checked["next_cursor"];

                    }
                    
                }

            }else{
                //page / cursor hasn't been noticed yet
                //go look or it, call twitter api
                // echo("not available");
                $results=$this->callTwitter($data['screen_name'],$data['handle'],$cursor,$twitter,$requestMethod);
                // $redis=Redis::set($data['screen_name'].':'.$cursor.':',$results['user']);
                $checked=$this->checkRelationship($data,$results,$twitter,$requestMethod);
                if(count($checked)>0){
                    //insert cursor
                    CursorModel::create([
                        'screen_name'=>$data['screen_name'],
                        'handle'=>$data['handle'],
                        'occupied'=>true,
                        'cursor'=>$cursor,
                        'next_cursor'=>$results['next_cursor'],
                        'previous_cursor'=>$results['previous_cursor'],
                        'crowdies_id'=>$data['crowdies_id']
                        ]);
                    //if you have been working for a while 
                    if(count($todo0)>0){
                        //set the occupied status as false first then move on
                        CursorModel::where('crowdies_id',$data['crowdies_id'])
                                    ->where('occupied',true)
                                    ->where('cursor',$usedCursor)
                                    ->update(['occupied'=>false]);
                    }
                    $status=false;
                }else{
                    $cursor=$checked["next_cursor"];
                }



            }
            
        }

        
        return $checked;  
    }
    /*
        To give a suggested high-profilers account that has connection with business owner
    */
    public function getFollowing(Request $request){
//        for getting the list of specfic user's friends (declared as screen_name)
        $data= $request->all();
        // cache engine
        $redis= Redis::connection();
        $key=$data["screen_name"].':';
        $results;
        // check if the data exists in cache or not
        // if not, call twitter
        if(is_null($redis->get($key))){

            $url = 'https://api.twitter.com/1.1/friends/list.json';
            $getfield = '?screen_name='.$data["screen_name"].'&skip_status=1&count=100';
            $requestMethod = 'GET';
            
            $todos= TwitterModel::where('handle','=',$data["handle"]);
            
            $twitter = new TwitterAPIExchange($this->settings($todos->pluck('access_token')[0],$todos->pluck('access_token_secret')[0]));
            $results = $twitter->setGetfield($getfield)
                         ->buildOauth($url, $requestMethod)
                         ->performRequest();  
            $redis->set($key,json_encode($results));
            $redis->expire($key,240);
            
        }else{
            // if yes, grab the data from cache
            $results=json_decode($redis->get($key),true);
        }
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
    /*
        Crowdies can follow recommended accounts for a busienss owner
    */
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
        
        $check=SentFollowingRequestModel::where('handle',$data['handle'])
                                        ->where('screen_name',$data['screen_name'])
                                        ->get();
        if(count($check)==0){
            
            $results = $twitter->buildOauth($url, $requestMethod)
                           ->setPostfields($postfields)
                           ->performRequest(); 
            // record the data in the SentFollowingRequest table
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
            return response()->json(["message"=>'Success'],201);
        }else{
            return response()->json(["message"=>'This Account Has Been Followed'],400);
        }
        
        
    }
    /*
        Crowdies can unfollow accounts that have been followed for a busienss owner
    */
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

    /*
        Retrieve the list of sent following twitter accounts and check the status.
        if they have followed back, update the data in the SentFollowingRequest table. 
        if not, count the date and show the accounts. 
    */
    public function getFriendshipsStatus(Request $request){
//        for getting the list of followers for specfic user (declared as screen_name)
        $data= $request->all();
        
        $todos2P= SentFollowingRequestModel::where('crowdies_id',$data['user_id']);

        $todos2= $todos2P->where('followed_back',false);
        $screen_names='';
        $todo=$todos2->get();
        $handles=array();
        // data should be in the form of comma-separated string
        for($i=0; $i<count($todo) ;$i++){

            if($i!==(count($todo)-1)){
                $screen_names.= $todo[$i]->screen_name.',';
                array_push($handles, $todo[$i]->handle);
            }else{
                $screen_names.= $todo[$i]->screen_name;
                array_push($handles, $todo[$i]->handle);
            }

        }
        $handles=array_unique($handles);
        // print_r($handles);
        // echo($screen_names);
        //retrieve screen_name relations (hoping for followed_by)
        if($screen_names!==''){
            // call the twitter for the latest updates
            $url = 'https://api.twitter.com/1.1/friendships/lookup.json';
            $getfield = '?screen_name='.$screen_names;
            $requestMethod = 'GET';
            foreach($handles as $handle){
                $todos= TwitterModel::where('handle',$handle);
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
                            // update the data in SentFollowingRequest table
                            SentFollowingRequestModel::where('crowdies_id',$data['user_id'])
                                                     ->where('handle',$handle)
                                                     ->where('screen_name',$result['screen_name'])
                                                     ->update(['followed_back'=>true]);

                            $crowdie=CrowdiesModel::find($data['user_id']);
                            // reward the crowdie
                            $crowdie->points=10+$crowdie["points"];
                            // echo($crowdie["points"]);
                            $crowdie->save();

                        }
                    }
                }
            }
   
            if(count($todos2P->get())>0){
                //check if all followings hasn't been followed back
                $todos3P=$todos2P->where('followed_back',false)->get();
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
    /*
        Called when it is required to check if the account has followed back the business owner. 
        All data are stored in SentFollowingRequest table. It will return every data in that table
        with false status in the followed_back column.
    */
    public function refreshStatus(Request $request){
//        for getting the list of followers for specfic user (declared as screen_name)
        $data= $request->all();
        $url = 'https://api.twitter.com/1.1/followers/ids.json';
        
        $requestMethod = 'GET';
        // get the un-followed_back twitter account
        $getBOInWorks=SentFollowingRequestModel::where('followed_back',false)->get();

        $tmp=array();
//        $num=0;
        foreach($getBOInWorks as $getBOInWork){
            // print_r($getBOInWork);
            // get the screen_name of the accounts
            array_push($tmp,strtolower($getBOInWork->handle));
        }
        // make them unique
        $newTmp=array_unique($tmp);
      
        // print_r($newTmp);
        
        $temp2=array();
        foreach($newTmp as $x){
            
            $temp1=array();
            // $x='williamhenry_94';
            // get the API Key of the specified business owner's Twitter account 
            $todos= TwitterModel::find($x);
            $getfield = '?screen_name='.$x.'&skip_status=1&count=20';
        //     // echo $todos['access_token'];

            // call twitter to get the list of followers of business owner.
            $twitter = new TwitterAPIExchange($this->settings($todos['access_token'],$todos['access_token_secret']));
            $results = $twitter->setGetfield($getfield)
                               ->buildOauth($url, $requestMethod)
                               ->performRequest();

            $ids=$results['ids'];
            foreach($ids as $id){
                // echo($id);
                $temp=array();
                // search if the retrieved twitter account's id has a match with the accounts 
                // from a business owner sent following request table
                // and followed_back status is false
                $todos2=SentFollowingRequestModel::where('handle',$x)
                                                 ->where('twitter_id',$id)
                                                 ->where('followed_back',false)
                                                 ->get();
                if(count($todos2)>0){
                    // array_push($temp,$id);
                    $unique=$x.",".$id.",".($todos2->pluck('created_at')[0]);
                    // need to create a unique id based on business owner's screen_name, retrieved followers' twitter_id and the timestamp
                    // of created_at
                    // returned data should be in the form of JSON object
                    $temp1['id']=hash('crc32',$unique);
                    $temp1['handle']=strtolower($x);
                    $temp1['ids']=$id;
                    $temp1['following_at']=$todos2->pluck('created_at')[0]; 
                    // wrap the data as a JSON arrat
                    array_push($temp2,$temp1);
//                    $num++;
                }

            }
            
        }
        // array_unique($temp2);
        // $temp['users']=$temp2; 
        return $temp2;  
  
    }
    /*
        It's called when there's a new followed back data in business owner's account. 
        It should edit the data in the database
    */
    public function refreshDatabase(Request $request){
        $datas=$request->all();
        foreach($datas as $data){
            $todos=SentFollowingRequestModel::where('handle',$data['handle'])
                                            ->where('twitter_id',$data['ids'])
                                            ->where('followed_back',false);
//                                            ->where('created_at',$data['following_at']);
            if(count($todos->get())>0){
                // update the data in the table
                $todos->update(['followed_back'=>true]);
                $savedData=SentFollowingRequestModel::where('handle',$data['handle'])
                                                    ->where('twitter_id',$data['ids'])
                                                    ->first();

                $crowdie=CrowdiesModel::find($savedData->crowdies_id);
                // reward the dedicated crowdies
                $crowdie->points=10+$crowdie["points"];
                // echo($crowdie["points"]);
                $crowdie->save();
            } 
        }
        return response()->json(["message"=>"Update Received","users"=>$data],201);

    }
    // get twitter detailed information regarding business owner
    // directly from twitter
    public function user(Request $request){
        $data= $request->all();
        $url = 'https://api.twitter.com/1.1/users/show.json';
        $getfield = '?screen_name='.$data["handle"];
        $requestMethod = 'GET';
        
        $todos= TwitterModel::find($data["handle"]);
        
        $twitter = new TwitterAPIExchange($this->settings($todos['access_token'],$todos['access_token_secret']));
        $results = $twitter->setGetfield($getfield)
                        ->buildOauth($url, $requestMethod)
                        ->performRequest();  
        
        return $results;  

    }

    public function classifier(Request $request){
        $data=$request->all();
        $temp=array();
        $descriptions=array();
        $counter=0;
        // check if an element to learn is exist in the list
        if(count($data["description"])>0){
            for($i=0;$i<(count($data["description"]));$i++){
                // if the data is not an empty string push to the temp array to be analysed
                if($data["description"][$i]!==""){
                    array_push($descriptions,$data["description"][$i]);
                    $temp[$counter]=$i;
                    $counter++;
                }   
            }
            // if (($key = array_search('', $data["description"])) !== false) {
            //     unset($data["description"][$key]);
            // }
            // connection to the provider 
            $ml = new MonkeyLearn\Client('a3909f9e4064a04fb00bbfd44c0e30fc415842b7');
            $text_list = $descriptions;
            $module_id = 'cl_98o77do3';
            $res = $ml->classifiers->classify($module_id, $text_list, true);
            $results=$res->result;
            $output=array();
            for($i=0;$i<(count($results));$i++){
                $to=array();
                foreach($results[$i] as $r){
                    $to2=array();
                    // print_r($r);
                    $to2["category_id"]=$r["category_id"];
                    $to2["index"]=$temp[$i];
                    $to2["label"]=$r["label"];
                    $to2["probability"]=$r["probability"];
                    array_push($to,$to2);
                }
                array_push($output,$to);
            }
            return($output);
        }else{
            return [];
        }
        
    }
}
