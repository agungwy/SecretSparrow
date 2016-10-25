<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\SentFollowingRequestModel;
use App\TwitterAuthModel;
use App\WorkModel;

class FollowController extends Controller
{
    /*
      This method is used to give the detail analysis of crowdies performance that currently working with a business owner.
    */
    public function getTotalAll($bo) {
      $crowdiesOn=WorkModel::where('handle',$bo)->get();
      
      foreach($crowdiesOn as $crowdieOn){
        $crowdieOn->crowdies_profile->user;
        $handle = SentFollowingRequestModel::where('handle',$bo)
                                            ->where('crowdies_id',$crowdieOn->crowdies_id)
                                            ->get();
        $crowdieOn->following=count($handle);
        $crowdieOn->followed_back=$this->getCrowdieFollowed($bo,$crowdieOn->crowdies_id)["followed_count"];
        if(count($handle)!==0){
          $crowdieOn->efficiency=(($this->getCrowdieFollowed($bo,$crowdieOn->crowdies_id)["followed_count"]/count($handle))*100);
        }else{
          $crowdieOn->efficiency=0;
        }
        

        
      }
      
      // $counter = 0;
      // foreach($handle as $handles) {
      //   $counter++;
      // }
      return $crowdiesOn;
    }
    /*
      This method handles the counting of the number of followed back from a business owner
    */
    public function getTotalFollowed($bo) {
      $follback = SentFollowingRequestModel::where('followed_back',true)
                                           ->where('handle',$bo)->get();
      $counter = 0;
      foreach($follback as $follbacks){
        $counter++;
      }
      return ["followed_count"=>$counter];
    }
    /*
      This method is used to give the total number of work done by a crowdies 
      for a specific business owner 
    */
    public function getCrowdieAll($bo,$cr) {
      $crowdie = SentFollowingRequestModel::where('handle',$bo)
                                          ->where('crowdies_id',$cr)->get();
      $counter = 0;
      foreach($crowdie as $crowdies) {
        $counter++;
      }
      return ["all"=>$counter];
    }
    /*
      This method is used to return the number of successful works done by a crowdie for a specific business owner.
    */
    public function getCrowdieFollowed($bo,$cr) {
      $follback = SentFollowingRequestModel::where('followed_back',true)
                                           ->where('handle',$bo)
                                           ->where('crowdies_id',$cr)->get();
      $counter = 0;
      foreach($follback as $follbacks) {
        $counter++;
      }
      return ["followed_count"=>$counter];
    }
    /*
      This method will return a list of JSON object. 
      The object contains a number of work has been done by all crowdies in a business owner.
    */
    public function crowdiesAll($bo) {

      $crowdie = SentFollowingRequestModel::where('handle',$bo);

      $temp=array();
      foreach($crowdie->get() as $crowdies) {
        $crowdies_id=$crowdies->crowdies_id;
        array_push($temp,$crowdies_id);
      }
      $temp2=array();
      foreach($temp as $t){
          $temp3=array();
          $temp3[$t]=$this->getCrowdieAll($bo,$t);
          if(!in_array($temp3, $temp2)) {
            array_push($temp2,$temp3);
        }
      }
      return $temp2;
    }
   /*
      This method will return a list of JSON object. 
      The object contains a number of successful workw caried by all crowdies in a business owner.
    */
    public function crowdiesFollowed($bo) {

      $crowdie = SentFollowingRequestModel::where('handle',$bo);
      $temp=array();
      foreach($crowdie->get() as $crowdies) {
        $crowdies_id=$crowdies->crowdies_id;
        array_push($temp,$crowdies_id);
      }
      $temp2=array();
      foreach($temp as $t){
          $temp3=array();
          $temp3[$t]=$this->getCrowdieFollowed($bo,$t);
          if(!in_array($temp3, $temp2)) {
            array_push($temp2,$temp3);
        }
      }
      return $temp2;
    }
}
