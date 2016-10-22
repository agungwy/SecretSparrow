<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkModel extends Model
{
    //
    protected $table="work";
    protected $appends=["followed_back","following","efficiency"];
    protected $fillable=["created_at","updated_at","crowdies_id","handle"];
    public $incrementing=false;

    public function bo_profile(){
    	return $this->belongsTo('App\MiddlemanModel',"handle");
    }

    public function crowdies_profile(){
    	return $this->belongsTo('App\CrowdiesModel',"crowdies_id");
    }

    public function setFollowedBackAttribute($value)
    {
        $this->attributes['followed_back'] = $value;
    }
    
    public function getFollowedBackAttribute()
    {
//        print_r($this->attributes);
        if(array_key_exists ( 'followed_back' , $this->attributes )){
            return $this->attributes['followed_back'];
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
    public function setEfficiencyAttribute($value)
    {
        $this->attributes['efficiency'] = $value;
    }
    
    public function getEfficiencyAttribute()
    {
//        print_r($this->attributes);
        if(array_key_exists ( 'efficiency' , $this->attributes )){
            return $this->attributes['efficiency'];
        }
    }

}
