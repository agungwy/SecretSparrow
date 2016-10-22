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

Route::get('/', 'ProductPageController@getView');
// });

//Route::get('auth/twitter', ['uses'=>'TwitterAuthController@redirectToProvider']);
Route::post('auth/twitter/callback', 'TwitterAuthController@registerTwitter');

Route::get('home', array('as' => 'home', 'uses' => function(){
  return view('home');
}));

Route::get('api/requests/all','TwitterAPIController@refreshStatus');
Route::get('api/requests/sent','TwitterAPIController@getFriendshipsStatus')->middleware('crowdies');
Route::put('api/requests/update','TwitterAPIController@refreshDatabase');
Route::post('api/follow','TwitterAPIController@follow')->middleware('crowdies');//,'middleware'=>'auth:api']);
Route::post('api/unfollow','TwitterAPIController@unfollow')->middleware('crowdies');//,'middleware'=>'auth:api']);
Route::get('api/followers','TwitterAPIController@getFollowers')->middleware('crowdies');//,'middleware'=>'auth:api']);
Route::get('api/friends',['uses'=>'TwitterAPIController@getFollowing','middleware'=>'crowdies']);
Route::post('api/register','Auth\AuthController@postRegister');
Route::put('api/role',['uses'=>'Auth\AuthController@role','middleware'=>'oauth']);
Route::get('api/twitter',['uses'=>'TwitterAPIController@user']);
Route::get('api/user/twitter',['uses'=>'TwitterAuthController@getTwitterDetail'])->middleware('oauth');
//Route::get('api/access_token','Auth\RegisterController@getPersonalAccessToken');
Route::get('api/categories', 'CategoryController@getCategory')->middleware('oauth');
Route::post('api/categories', 'CategoryController@selectCategory')->middleware('oauth');
Route::get('api/recommended', 'CategoryController@recommendedBOs')->middleware('crowdies');

Route::get('api/work/show/crowdies', 'WorkController@showBOs')->middleware('crowdies');
Route::post('api/work', 'WorkController@work')->middleware('crowdies');
Route::delete('api/work/delete/bo', 'WorkController@quit')->middleware('crowdies');
Route::get('api/work/show/bo', 'WorkController@showCrowdies')->middleware('bo');
Route::delete('api/work/delete/crowdies', 'WorkController@removeCrowdies')->middleware('bo');
Route::get('api/work/at',"WorkController@workingAt")->middleware('oauth');

//for dashboard
Route::get('/api/follow/total_all/{bo}', 'FollowController@getTotalAll')->middleware('bo');
Route::get('/api/follow/total_followed/{bo}', 'FollowController@getTotalFollowed')->middleware('bo');
Route::get('/api/follow/crowdie_all/{bo}', 'FollowController@crowdiesAll')->middleware('bo');
Route::get('/api/follow/crowdie_followed/{bo}', 'FollowController@crowdiesFollowed')->middleware('bo');

//for twitter interests
Route::post('api/classifier','TwitterAPIController@classifier')->middleware('crowdies');



/*
	For Product Page
*/

Route::post('product/register','ProductPageController@registerTester');
Route::get('download/{user_id}','ProductPageController@getFile');
Route::get('stat/tester','ProductPageController@getTesters');
Route::get('stat/counter','ProductPageController@getVisitors');
Route::post('social','ProductPageController@setSocialNetwork');
Route::get('stat/social','ProductPageController@getSocial');
Route::get('dashboard', function(){
	return view('dashboard');
});
Route::get('logout',function(){

	//echo($_COOKIE['EAIT_WEB']);
	print_r($_SESSION);
	unset($_COOKIE['EAIT_WEB']);
	setcookie("EAIT_WEB", "", time() - 3600);
	echo($_COOKIE['EAIT_WEB']);

	header("Location: https://api.uqcloud.net/logout");
});
/*
	End Product Page
*/

App::singleton('oauth2', function() {
    
    $storage = new OAuth2\Storage\Pdo(array(
        'dsn' => 'mysql:dbname=users;host=127.0.0.1:8889', 
        'username' => 'root', 
        'password' => 'root'));

    $config = array(
	    'access_lifetime' => 2592000,
	    'refresh_token_lifetime'=>5184000
	);
    
    $server = new OAuth2\Server($storage,$config);
    
    $server->addGrantType(new OAuth2\GrantType\ClientCredentials($storage));
    $server->addGrantType(new OAuth2\GrantType\UserCredentials($storage));
    $server->addGrantType(new OAuth2\GrantType\RefreshToken($storage));

    $server->setScopeUtil(new OAuth2\Scope(array('supported_scopes' => array('bo', 'crowdies'))));
    
    return $server;
});
Route::post('oauth/token', function(){

    $bridgedRequest  = OAuth2\HttpFoundationBridge\Request::createFromRequest(Request::instance());
    $bridgedResponse = new OAuth2\HttpFoundationBridge\Response();

    
	$grantType=$bridgedRequest->request->get('grant_type');
    
    // echo($find->role);
	if($grantType=="password"){
		$username=$bridgedRequest->request->get('username');
		$todos=App\User::where('username',$username)->first();
		if(count($todos)>0){
			if($todos->role=='crowdies'){
				$addScope=$bridgedRequest->request->add(['scope'=>$todos->role]);
			}else if($todos->role=='business owner'){
				$addScope=$bridgedRequest->request->add(['scope'=>'bo']);
			}
		}
	}

	if($grantType=="refresh_token"){
		$refreshToken=$bridgedRequest->request->get('refresh_token');
		$token= App\OAuthRefreshTokenModel::find($refreshToken);
		
		$user=App\User::find($token['user_id']);
		// print_r($user);
		if($user["role"]=='crowdies'){
	    	$addScope=$bridgedRequest->request->add(['scope'=>$user["role"]]);
	    }else if($user["role"]=='business owner'){
	    	$addScope=$bridgedRequest->request->add(['scope'=>'bo']);
	    }
	}
	
    // print_r($bridgedRequest);
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


//user details
Route::get('api/user/detail/{user_id}',['uses'=>'Auth\AuthController@getUserDetail','middleware'=>'oauth']);
// Route::auth();

// Route::get('/home', 'HomeController@index');

/*
	start edit profile
*/

Route::post('api/user/edit',['uses'=>'Auth\AuthController@editProfile'])->middleware('oauth');
Route::get('api/user/picture/{id}',['uses'=>'Auth\AuthController@showProfilePicture']);
Route::put('api/user/password',['uses'=>'Auth\AuthController@changePassword'])->middleware('oauth');