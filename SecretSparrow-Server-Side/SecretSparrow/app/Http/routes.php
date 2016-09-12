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
// CORS
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Credentials: true');
 header('Access-Control-Allow-Methods: POST,GET,PUT,DELETE');
 header('Access-Control-Allow-Headers: Content-Type, Authorization');
 
Route::get('/', function () {
    return view('welcome');
});

Route::get('auth/twitter', ['uses'=>'TwitterAuthController@redirectToProvider','middleware'=>'bo']);
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
Route::get('api/friends',['uses'=>'TwitterAPIController@getFollowing','middleware'=>'crowdies']);
Route::post('api/register','Auth\AuthController@postRegister');
Route::put('api/role',['uses'=>'Auth\AuthController@role','middleware'=>'oauth']);
//Route::get('api/access_token','Auth\RegisterController@getPersonalAccessToken');
Route::get('/api/categories', 'CategoryController@getCategory');
Route::post('/api/categories', 'CategoryController@selectCategory');


App::singleton('oauth2', function() {
    
    $storage = new OAuth2\Storage\Pdo(array(
        'dsn' => 'mysql:dbname=SecretSparrow;host=127.0.0.1:8889', 
        'username' => 'root', 
        'password' => 'root'));
    
    $server = new OAuth2\Server($storage);
    
    $server->addGrantType(new OAuth2\GrantType\ClientCredentials($storage));
    $server->addGrantType(new OAuth2\GrantType\UserCredentials($storage));
    
    return $server;
});
Route::post('oauth/token', function()
{
    $bridgedRequest  = OAuth2\HttpFoundationBridge\Request::createFromRequest(Request::instance());
    $bridgedResponse = new OAuth2\HttpFoundationBridge\Response();
    
    $bridgedResponse = App::make('oauth2')->handleTokenRequest($bridgedRequest, $bridgedResponse);
    
    return $bridgedResponse;
});

Route::get('private', function()
{
	$bridgedRequest  = OAuth2\HttpFoundationBridge\Request::createFromRequest(Request::instance());
//    print_r($bridgedRequest);
	$bridgedResponse = new OAuth2\HttpFoundationBridge\Response();
//	print_r(App);
	if (App::make('oauth2')->verifyResourceRequest($bridgedRequest, $bridgedResponse)) {
		
		$token = App::make('oauth2')->getAccessTokenData($bridgedRequest);
		
		return response()->json(array(
			'private' => 'stuff',
			'user_id' => $token['user_id'],
			'client'  => $token['client_id'],
			'expires' => $token['expires'],
		));
	}
	else {
		return Response::json(array(
			'error' => 'Unauthorized'
		), $bridgedResponse->getStatusCode());
	}
});