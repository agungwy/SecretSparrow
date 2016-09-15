// this javascript for saving the data and send it to the controller to be proccessed
var app= angular.module('starter.services', ['ngResource', 'ngCordova','ngCordovaOauth'])

// data for user role 
app.factory('RegisterService', function() {

	var role = "";

	var userId="";

	var addCategories = function(list) {

		$http({
			method:'POST',
			url: 'https://incognito.uqcloud.net/api/categories',
			data: list
		}).success(function(data, status, headers,config){
			console.log(data);
			
		})
	};

	var changeRole = function(new_role){
		role = new_role;
	}

	var setId = function(id){
		userId = id;
	}



	var getRole = function(){
		return role;
	};

	return {
	changeRole: changeRole,
	getRole: getRole
	};
});
app.factory('TwitterService', function($cordovaOauth, $cordovaOauthUtility, $http, $resource, $q) {
	console.log("test");
    // 1
    var twitterKey = "STORAGE.TWITTER.KEY";
    var clientId = '9uWtO2uAnwxzFhY3TafHF91M0';
    var clientSecret = 'IRHZ5fawFHUkgrlkrBnBETDMNqgXxbhwN8di7BwXNnOiVPAY52';

    // 2
    function storeUserToken(data) {
    	
        localStorage.setItem(twitterKey, JSON.stringify(data));
    }

    function getStoredToken() {
        return localStorage.getItem(twitterKey);
    }

    // 3
    function createTwitterSignature(method, url) {
    	console.log('url');
        var token = angular.fromJson(getStoredToken());
        var oauthObject = {
            oauth_consumer_key: clientId,
            oauth_nonce: $cordovaOauthUtility.createNonce(10),
            oauth_signature_method: "HMAC-SHA1",
            oauth_token: token.oauth_token,
            oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
            oauth_version: "1.0"
        };
        var signatureObj = $cordovaOauthUtility.createSignature(method, url, oauthObject, {}, clientSecret, token.oauth_token_secret);
        $http.defaults.headers.common.Authorization = signatureObj.authorization_header;
    }

    return {
        // 4
        initialize: function() {
            var deferred = $q.defer();
            var token = getStoredToken();
            console.log("init service");
            console.log(localStorage.getItem(twitterKey));
            if (token !== null) {
            	console.log("yang ini");
                deferred.resolve(true);
            } else {
            	console.log("kosong");
                $cordovaOauth.twitter(clientId, clientSecret).then(function(result) {
                    storeUserToken(result);
                    console.log("masuk");
                    console.log(Object.keys(result));
                    deferred.resolve(true);
                }, function(error) {
                	console.log("error");
                	console.log(error);
                    deferred.reject(error);
                    
                });
            }
            console.log("deffered");
            console.log(Object.keys(deferred));
            return deferred.promise;
        },
        // 5
        isAuthenticated: function() {
            return getStoredToken() !== null;
        },
        // 6
        getHomeTimeline: function() {
            var home_tl_url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
            createTwitterSignature('GET', home_tl_url);
            return $resource(home_tl_url).query();
        },
        storeUserToken: storeUserToken,
        getStoredToken: getStoredToken,
        createTwitterSignature: createTwitterSignature
    };
});



