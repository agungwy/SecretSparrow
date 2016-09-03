<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TwitterModel extends Model
{
    //
    protected $table="twitter_accounts";
    public $timestamps=false;
    protected $primaryKey="handle";
    protected $fillable=[
        "access_token","access_token_secret","handle"
    ];
}
