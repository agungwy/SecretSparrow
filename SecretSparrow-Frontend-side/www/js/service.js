// this javascript for saving the data and send it to the controller to be proccessed
var app= angular.module('starter.services', [])

// data for user role 
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

