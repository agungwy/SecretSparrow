// this javascript for saving the data and send it to the controller to be proccessed
var app= angular.module('starter.services', [])

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


