<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TwitterModel extends Model
{
    // This Twitter model describes properties of twitter account table from database
    protected $table="twitter_accounts";
    public $timestamps=false;
    protected $primaryKey="handle";
    // This attribute is filled by Twitter API
    protected $fillable=[
        "access_token","access_token_secret","handle"
    ];
}
