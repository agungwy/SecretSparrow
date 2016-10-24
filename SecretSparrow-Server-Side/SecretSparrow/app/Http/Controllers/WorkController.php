<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\WorkModel;
use App\CrowdiesModel;
use App\TwitterAuthModel;

class WorkController extends Controller
{
    //
    public function work(Request $request){
    	$data=$request->all();
    	$crowdies=CrowdiesModel::find($data["crowdies_id"]);
    	if(count($crowdies)>0){
	    	foreach($data['companies'] as $x){
		    	
		    	$company=TwitterAuthModel::where('handle',$x['handle']);
		    	if(count($company->get())>0){
		    		$check=WorkModel::where('crowdies_id',$data['crowdies_id'])
		    						->where('handle',$x['handle'])->get();
		    		if(count($check)==0 && ($company->first()->position-1)>=0){
		    			WorkModel::create([
		    					'crowdies_id'=>$data['crowdies_id'],
		    					'handle'=>$x['handle']
		    				]);
							$company->update(["position"=>$company->first()->position-1]);
		    			
		    		}
		    		// else{
		    		// 	return response()->json(['message'=>'Already worked'],403);
		    		// }
		    		
		    	}
		    	// else{
		    	// 	return response()->json(['message'=>'Not Found'],404);
		    	// }
		    }
		    return response()->json(['message'=>'Success'],201);
		}else{
			return response()->json(['message'=>'Not Found'],404);
		}
    }
    public function quit(Request $request){
    	$data=$request->all();
    	$crowdies=CrowdiesModel::find($data["crowdies_id"]);
    	$company=TwitterAuthModel::where('handle',$data['handle']);
    	if(count($crowdies)>0 && count($company->get())>0){
    		$check=WorkModel::where('crowdies_id',$data['crowdies_id'])
    						->where('handle',$data['handle']);
    		if(count($check->get())>0){
    			$check->delete();
				$company->update(["position"=>$company->first()->position+1]);
    			return response()->json(['message'=>'Deleted'],201);
    		}else{
    			return response()->json(['message'=>'Invalid Action'],403);
    		}
    		
    	}else{
    		return response()->json(['message'=>'Not Found'],404);
    	}
    }
    public function showBOs(Request $request){
    	$data=$request->all();
    	$crowdies=CrowdiesModel::find($data["crowdies_id"]);
    	if(count($crowdies)>0){
    		$todos=WorkModel::where('crowdies_id',$data['crowdies_id'])->paginate(6);
    		foreach($todos as $todo){
    			$todo->bo_profile;
    		}
			return $todos;
    		
    	}else{
    		return response()->json(['message'=>'Not Found'],404);
    	}
    }
    
    public function showCrowdies(Request $request){
    	$data=$request->all();
    	$company=TwitterAuthModel::where('handle',$data['handle']);
		
    	if(count($company->get())>0){
    		$todos=WorkModel::where('handle',$data['handle'])->get();
		
			$results=array();
			// $counter=0;
    		foreach($todos as $todo){
    			$todo->crowdies_profile->user;
				$app=app('App\Http\Controllers\FollowController')->getCrowdieFollowed($data["handle"],$todo->crowdies_id);
                $todo->followed_back=$app["followed_count"];
				// $todo->followed_back=$counter;
				// $counter++;
    		}
			foreach($todos as $todo){
				array_push($results,$todo);
			}
			
			usort($results, function($a, $b) { //Sort the array using a user defined function
				return $b->followed_back < $a->followed_back ? -1 : 1; //Compare the scores
			});
			return array_slice($results, 0, 6);
    		
    	}else{
    		return response()->json(['message'=>'Not Found'],404);
    	}
    }
    public function removeCrowdies(Request $request){
    	$data=$request->all();
    	$company=TwitterAuthModel::where('handle',$data['handle']);
    	if(count($company->get())>0){
	    	// foreach($data["crowdies"] as $x){
	    		$crowdies=CrowdiesModel::find($data["crowdies_id"]);
		    	
		    	if(count($crowdies)>0){
		    		$check=WorkModel::where('crowdies_id',$data['crowdies_id'])
		    						->where('handle',$data['handle']);
		    	
	    			$check->delete();
					$company->update(["position"=>$company->first()->position+1]);
	    			
		    		
		    		
		    	}else{
		    		return response()->json(['message'=>'Not Found'],404);
		    	}
	    	// }
	    	return response()->json(['message'=>'Deleted'],201);
	    }else{
	    	return response()->json(['message'=>'Not Found'],404);
	    }
    }

	public function workingAt(Request $request){
		$data=$request->all();
		$workingOn=WorkModel::where('crowdies_id',$data["crowdies_id"])
							->where('handle',$data["handle"])
							->first();
		if(count($workingOn)>0){
			
			$todos=TwitterAuthModel::where('handle',$workingOn->handle)->first();
			if(count($todos)>0){
                $numCrowdies=WorkModel::where('handle',$todos->handle)->get();
                $todos->crowdies=count($numCrowdies);
                $todos->interestedIn;
				$app=app('App\Http\Controllers\TwitterAPIController')->user(new Request(["handle"=>$todos->handle]));
				$todos->following=$app["friends_count"];
              	$todos->follower=$app["followers_count"];
                return $todos;
			}else{
				return response()->json(["message"=>"Not Found"],404);
			}
			
		}else{
			return response()->json(["message"=>"Not Found"],404);
		}
	}

}
