<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MiddlemanModel extends Model
{
    //
    protected $table="twitter_auth";
    protected $primaryKey="handle";
    // protected $appends=["crowdies","following","follower"];
    protected $fillable = [
        'handle', 'twitter_id',"user_id","avatar","name"
    ];
    // protected $primaryKey="user_id";
    public $incrementing=false;

    
    
}
