<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TwitterAuthModel extends Model
{
    //
    protected $table="twitter_auth";
    protected $fillable = [
        'name', 'handle', 'twitter_id','avatar',"user_id"
    ];
    // protected $primaryKey="user_id";
    public $incrementing=false;
}
