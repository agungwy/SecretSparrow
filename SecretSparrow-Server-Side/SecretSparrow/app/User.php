<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table="oauth_users";
    protected $primaryKey="user_id";
    protected $fillable = [
        'name', 'username', 'password','role','user_id',"created_at","updated_at","email"
    ];
    public $incrementing=false;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',"email"
    ];
    public function crowdies(){
        return $this->hasOne('App\CrowdiesModel',"crowdies_id");
    }
    public function bo(){
        return $this->hasOne('App\TwitterAuthModel');
    }

}
