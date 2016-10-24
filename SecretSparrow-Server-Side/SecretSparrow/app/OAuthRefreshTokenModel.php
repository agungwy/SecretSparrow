<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OAuthRefreshTokenModel extends Model
{
    //
    protected $table="oauth_refresh_tokens";
    public $timestamps=false;
    public $incrementing=false;
    protected $primaryKey="refresh_token";
    protected $fillable=["refresh_token","expires","scope","user_id","client_id"];
    
}
