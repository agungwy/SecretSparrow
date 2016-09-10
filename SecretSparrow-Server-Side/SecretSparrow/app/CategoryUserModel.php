<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryUserModel extends Model
{
    //
    protected $table="category_users";
    //protected $primaryKey="category_name";
    public $timestamps=false;
    public $incrementing=false;
    protected $fillable=['category_name','user_id'];
}
