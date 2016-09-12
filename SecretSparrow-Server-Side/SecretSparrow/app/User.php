<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // This user model describes OAuth user table from database.
    protected $table='oauth_users';
    protected $primaryKey='user_id';
    public $incrementing=false;

    // This attribute can be filled by the user
    protected $fillable = [
        'name', 'email', 'password','user_id','role','created_at','updated_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    // this part is hidden and cannot be seen by user
    protected $hidden = [
        'password',
    ];
}
