<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CounterModel extends Model
{
    //
    protected $connection = 'mysql2';
    protected $table = 'counter';
    // protected $primaryKey="id";
    // public $incrementing=false;

    protected $fillable=["ip_address",'id','created_at','updated_at','session_id'];
}
