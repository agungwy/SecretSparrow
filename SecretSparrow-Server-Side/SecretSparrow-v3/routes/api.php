<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/requests/all','TwitterAPIController@refreshStatus');
Route::get('/requests/sent','TwitterAPIController@getFriendshipsStatus');
Route::post('/follow','TwitterAPIController@follow');//,'middleware'=>'auth:api']);
Route::post('/unfollow','TwitterAPIController@unfollow');//,'middleware'=>'auth:api']);
Route::get('/followers','TwitterAPIController@getFollowers');//,'middleware'=>'auth:api']);
Route::get('/friends','TwitterAPIController@getFollowing');//,'middleware'=>'auth:api']);
Route::post('/register','Auth\RegisterController@postRegister');
Route::get('/access_token','Auth\RegisterController@getPersonalAccessToken');

