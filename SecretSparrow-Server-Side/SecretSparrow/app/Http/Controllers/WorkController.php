<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\WorkModel;
use App\CrowdiesModel;
use App\TwitterAuthModel;

class WorkController extends Controller
{
    // this function is called when a crowdie wants to work for a list
	// of business owner
    public function work(Request $request){
    	$data=$request->all();
    	$crowdies=CrowdiesModel::find($data["crowdies_id"]);
		// check if the crowdies are valid
    	if(count($crowdies)>0){
	    	foreach($data['companies'] as $x){
		    	
		    	$company=TwitterAuthModel::where('handle',$x['handle']);
				// check if the business owners are valid
		    	if(count($company->get())>0){
		    		$check=WorkModel::where('crowdies_id',$data['crowdies_id'])
		    						->where('handle',$x['handle'])->get();
					// check if you haven't work for the business owner and check if the position is still available
		    		if(count($check)==0 && ($company->first()->position-1)>=0){
						// mark the crowdie as an employee of the business owner
		    			WorkModel::create([
		    					'crowdies_id'=>$data['crowdies_id'],
		    					'handle'=>$x['handle']
		    				]);
							// edit the available position
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
	// this function can handle if a crowdie wants to quit from the current job
    public function quit(Request $request){
    	$data=$request->all();
    	$crowdies=CrowdiesModel::find($data["crowdies_id"]);
    	$company=TwitterAuthModel::where('handle',$data['handle']);
		// check of the crowdies and business owner are valid
    	if(count($crowdies)>0 && count($company->get())>0){
    		$check=WorkModel::where('crowdies_id',$data['crowdies_id'])
    						->where('handle',$data['handle']);
			// check of the crowdies are truly working for the business owner
    		if(count($check->get())>0){
				// delete the data fromt the database
    			$check->delete();
				// add the available position by one
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
    // showing list of currently working crowdies in a specific business owner account
    public function showCrowdies(Request $request){
    	$data=$request->all();
		
    	$company=TwitterAuthModel::where('handle',$data['handle']);
		// check the validity of a business owner
    	if(count($company->get())>0){
    		$todos=WorkModel::where('handle',$data['handle'])->get();
		
			$results=array();
			// $counter=0;
    		foreach($todos as $todo){
    			$todo->crowdies_profile->user;
				// get the missing information of this crowdies from getCrowdieFollowed data from FollowController class
				$app=app('App\Http\Controllers\FollowController')->getCrowdieFollowed($data["handle"],$todo->crowdies_id);
                $todo->followed_back=$app["followed_count"];
				// $todo->followed_back=$counter;
				// $counter++;
    		}
			foreach($todos as $todo){
				array_push($results,$todo);
			}
			// need to sort the result based on the number of followed back
			usort($results, function($a, $b) { //Sort the array using a user defined function
				return $b->followed_back < $a->followed_back ? -1 : 1; //Compare the scores
			});
			// just return 6 datas
			return array_slice($results, 0, 6);
    		
    	}else{
    		return response()->json(['message'=>'Not Found'],404);
    	}
    }
	/*
		To be used when the crowdies are underperformed, so removing or firing the crowdies are necessary action.
		It can only be done by a business owner.
	*/
    public function removeCrowdies(Request $request){
    	$data=$request->all();
    	$company=TwitterAuthModel::where('handle',$data['handle']);
		// check the validity of the business owner
    	if(count($company->get())>0){
	    	// foreach($data["crowdies"] as $x){
	    		$crowdies=CrowdiesModel::find($data["crowdies_id"]);
		    	// check the validity of the crowdies
		    	if(count($crowdies)>0){
		    		$check=WorkModel::where('crowdies_id',$data['crowdies_id'])
		    						->where('handle',$data['handle']);
					// remove the crowdies and business owner tuple from the table
	    			$check->delete();
					// add the available position of the business owner by one
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
	/*
		It is used to validate if the crowdie is working for the specified business owner
	*/
	public function workingAt(Request $request){
		$data=$request->all();
		$workingOn=WorkModel::where('crowdies_id',$data["crowdies_id"])
							->where('handle',$data["handle"])
							->first();
		// if the crowdie and business owner work, return the inforamtion
		if(count($workingOn)>0){
			
			$todos=TwitterAuthModel::where('handle',$workingOn->handle)->first();
			// check if the business owner is real
			if(count($todos)>0){
                $numCrowdies=WorkModel::where('handle',$todos->handle)->get();
                $todos->crowdies=count($numCrowdies);
                $todos->interestedIn;
				// get the missing information from user method in TwitterAPIController
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
