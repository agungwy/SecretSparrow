<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\CategoryModel;
use App\CategoryUserModel;
use App\TwitterAuthModel;
// use GuzzleHttp;

class CategoryController extends Controller
{
    //this function is to retrieve the list of categories from the database
  public function getCategory(){
  	$categories = CategoryModel::all();
  	return $categories; 
  }

  //for handling user's request on choosing interests or categories
  //it accepts JSON array format.
  public function selectCategory(Request $request){
    $datas=$request->all();
    foreach($datas as $data){
      CategoryUserModel::create([
        'category_name' => $data['category_name'],
        "user_id" => $data['user_id']
      ]);
    }
    return response()->json(['message'=>'success'],201);
  }
  /*
    The function returned the recommended business owner
    based on the crowdies selected interests. 
  */
  public function recommendedBOs (Request $request){
    $data=$request->all();
    // need to find the interest of the specific crowdies
    $todos=CategoryUserModel::where('user_id',$data['user_id']);
    $array=array();
    if(count($todos->get())>0){
      foreach($todos->get() as $todo){
        $category_name=$todo->category_name;
        // $todo->category_name;
        // echo($category_name);
        // search for the interests based on the crowdies' interests and get the business owner's user_id
        $todos2=CategoryUserModel::where('category_name',$category_name);
        foreach($todos2->get() as $todo2){
          $user_id=$todo2->user_id;
          // echo($user_id);
          if($user_id!==$data['user_id']){
            // echo($user_id);
            // get the detailed information of the business owner.
            $todos3=TwitterAuthModel::where('user_id',$user_id)->first();
            //don't show company that doesn't have any position available
            if(count($todos3)>0 && $todos3->position>0){
              $app=app('App\Http\Controllers\TwitterAPIController')->user(new Request(["handle"=>$todos3->handle]));
              $todos3->following=$app["friends_count"];
              $todos3->follower=$app["followers_count"];
              // $todos3->crowdies=4;
              array_push($array, $todos3);
            }
          }
        }
        
      }
      $output=array();
      foreach(array_unique($array) as $i){
        array_push($output,$i);
      }
      // print_r (app('App\Http\Controllers\TwitterAPIController')->user(new Request(["handle"=>"williamhenry_94"])));
      return $output;
      // return $todos->get();
    }else{
      return response()->json(['message'=>'Not Found'],404);
    }

  }
}
