<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TwitterAuth extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('twitter_auth', function (Blueprint $table) {
            $table->string('user_id');
            $table->string('name');
            $table->string('handle')->unique();
            $table->string('twitter_id');
            $table->string('avatar');
//            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::drop('twitter_auth');
    }
}
