<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SentFollowingRequestModel extends Model
{
    //
    protected $appends=["days"];
    protected $table='sent_following_request';
    public $incrementing= false;
    protected $fillable=["twitter_id","twitter_id_str","handle","created_at","name","updated_at","followed_back","friends_count","followers_count","profile_image_url","profile_image_url_https","crowdies_id",'screen_name'];

    public function setDaysAttribute($value)
    {
        $this->attributes['days'] = $value;
    }
    
    public function getDaysAttribute()
    {
//        print_r($this->attributes);
        if(array_key_exists ( 'days' , $this->attributes )){
            return $this->attributes['days'];
        }
    }

    public function followings(){
    	return $this->belongsTo('App\TwitterModel','handle');
    }


}
