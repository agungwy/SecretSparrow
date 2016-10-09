<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\SentFollowingRequestModel;

class FollowController extends Controller
{
    public function getTotalAll($bo) {
      $handle = SentFollowingRequestModel::where('handle',$bo)->get();
      $counter = 0;
      foreach($handle as $handles) {
        $counter++;
      }
      return $counter;
    }

    public function getTotalFollowed($bo) {
      $follback = SentFollowingRequestModel::where('followed_back',true)
                                           ->where('handle',$bo)->get();
      $counter = 0;
      foreach($follback as $follbacks){
        $counter++;
      }
      return $counter;
    }

    public function getCrowdieAll($bo,$cr) {
      $crowdie = SentFollowingRequestModel::where('handle',$bo)
                                          ->where('crowdies_id',$cr)->get();
      $counter = 0;
      foreach($crowdie as $crowdies) {
        $counter++;
      }
      return $counter;
    }

    public function getCrowdieFollowed($bo,$cr) {
      $follback = SentFollowingRequestModel::where('followed_back',true)
                                           ->where('handle',$bo)
                                           ->where('crowdies_id',$cr)->get();
      $counter = 0;
      foreach($follback as $follbacks) {
        $counter++;
      }
      return $counter;
    }

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

    public function crowdiesFollowed($bo) {

      $crowdie = SentFollowingRequestModel::where('followed_back',true)
                                           ->where('handle',$bo);
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
