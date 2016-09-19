<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TwitterAuthModel extends Model
{
    // This model describes twitter_auth table from database
    protected $table="twitter_auth";
    // This attribute is filled by Twitter API
    protected $fillable = [
        'name', 'handle', 'twitter_id','avatar',"username"
    ];
    // protected $primaryKey="user_id";
    public $incrementing=false;
}
