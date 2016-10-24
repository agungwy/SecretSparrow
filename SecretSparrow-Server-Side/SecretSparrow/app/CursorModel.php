<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CursorModel extends Model
{
    //
    protected $table="working_cursor";
    protected $fillable=["cursor","crowdies_id","handle","previous_cursor","next_cursor","occupied","screen_name"];
    
    
    
}
