<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CrowdiesModel extends Model
{
    //
    protected $table="crowdies";
    protected $primaryKey="crowdies_id";
    protected $fillable=[
    "created_at","updated_at","crowdies_id","profile_picture_url","profile_picture_filename",
    	"profile_picture_filepath","points",
    	];
    public $incrementing=false;

    public function user(){
    	return $this->hasOne('App\User',"user_id");
    }
}
