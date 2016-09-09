

var app= angular.module('starter.services', [])

app.factory('RegisterService', function() {

	var role = 0;

	var changeRole = function(x) {
		role = x;
	};

	var getRole = function(){
		return role;
	};

	return {
	changeRole: changeRole,
	getRole: getRole
	};
});

