<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SocialNetworkModel extends Model
{
    //
    protected $table="social_network";
    protected $connection = 'mysql2';
    protected $primaryKey="platform";
    public $incrementing=false;
    protected $fillable=['platform','score','created_at','updated_at'];
}
