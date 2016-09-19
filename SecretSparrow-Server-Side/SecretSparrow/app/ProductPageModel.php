<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductPageModel extends Model
{
    //
    protected $connection = 'mysql2';
    protected $table = 'tester';
    protected $primaryKey="tester_id";
    public $incrementing=false;

    protected $fillable=["tester_id",'created_at','updated_at','name','email'];
}
