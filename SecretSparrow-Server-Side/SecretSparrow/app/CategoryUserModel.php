<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryUserModel extends Model
{
    // This model describe category_users table in database
    protected $table="category_users";
    // protected $primaryKey="user_id";
    public $timestamps=false;
    public $incrementing=false;

    // This attribute is filled when user select select category
    protected $fillable=['category_name','user_id'];


    // public function bo(){
    // 	return $this->hasMany('App\TwitterAuthModel','user_id');
    // }
}
