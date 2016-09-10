<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
    //
   protected $table="category";
   protected $primaryKey="category_name";
   public $timestamps=false;
   public $incrementing=false;
}
