<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('auth/twitter', 'TwitterAuthController@redirectToProvider');
Route::get('auth/twitter/callback', 'TwitterAuthController@handleProviderCallback');

Route::get('home', array('as' => 'home', 'uses' => function(){
  return view('home');
}));

Route::get('api/requests/all','TwitterAPIController@refreshStatus');
Route::get('api/requests/sent','TwitterAPIController@getFriendshipsStatus');
Route::put('api/requests/update','TwitterAPIController@refreshDatabase');
Route::post('api/follow','TwitterAPIController@follow');//,'middleware'=>'auth:api']);
Route::post('api/unfollow','TwitterAPIController@unfollow');//,'middleware'=>'auth:api']);
Route::get('api/followers','TwitterAPIController@getFollowers');//,'middleware'=>'auth:api']);
Route::get('api/friends','TwitterAPIController@getFollowing');
Route::post('api/register','Auth\AuthController@postRegister');
Route::put('api/role','Auth\AuthController@role');
//Route::get('api/access_token','Auth\RegisterController@getPersonalAccessToken');
