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
}
