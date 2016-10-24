<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TwitterAuthModel extends Model
{
    //
    protected $table="twitter_auth";
    protected $primaryKey="user_id";
    protected $appends=["crowdies","following","follower"];
    protected $fillable = [
        'handle', 'twitter_id',"user_id","avatar","name","position"
    ];
    // protected $primaryKey="user_id";
    public $incrementing=false;
    public function setCrowdiesAttribute($value)
    {
        $this->attributes['crowdies'] = $value;
    }
    
    public function getCrowdiesAttribute()
    {
//        print_r($this->attributes);
        if(array_key_exists ( 'crowdies' , $this->attributes )){
            return $this->attributes['crowdies'];
        }
    }
    public function setFollowingAttribute($value)
    {
        $this->attributes['following'] = $value;
    }
    
    public function getFollowingAttribute()
    {
//        print_r($this->attributes);
        if(array_key_exists ( 'following' , $this->attributes )){
            return $this->attributes['following'];
        }
    }
    public function setFollowerAttribute($value)
    {
        $this->attributes['follower'] = $value;
    }
    
    public function getFollowerAttribute()
    {
//        print_r($this->attributes);
        if(array_key_exists ( 'follower' , $this->attributes )){
            return $this->attributes['follower'];
        }
    }
    public function interestedIn()
    {
        return $this->hasMany("App\CategoryUserModel","user_id");
    }

}
