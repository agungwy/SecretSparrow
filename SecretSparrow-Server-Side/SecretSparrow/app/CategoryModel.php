<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
    // This model describes caregory table in database
   protected $table="category";
   protected $primaryKey="category_name";
   public $timestamps=false;
   public $incrementing=false;
}
