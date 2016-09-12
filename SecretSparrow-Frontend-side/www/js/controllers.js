/* Controller for this project
All of the controller will be in here with different name*/


// angular js variable for controller
var app = angular.module('starter.controllers', [])


// controller for starter.html
app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

});

//controller for chooseCategories.html

app.controller('ChooseCategoriesCtrl', function($scope, $http, $state, RegisterService) {
  // code for changing the color of the icon by click
  $scope.iconColor1={"color":"black"};
  $scope.iconColor2={"color":"black"};
  $scope.iconColor3={"color":"black"};
  $scope.iconColor4={"color":"black"};
  $scope.iconColor5={"color":"black"};
  $scope.iconColor6={"color":"black"};
  $scope.iconColor7={"color":"black"};
  $scope.iconColor8={"color":"black"};
  $scope.iconColor9={"color":"black"};

  var userId = localStorage.getItem("user_id");

  var list =[];

  // change the color into red while click
  $scope.iconColorChange1 = function() {
    // $scope.iconColor1 = ($scope.iconColor1 === 'black' ? '#ED5356' : 'black');
    // 
      // $scope.iconColor1={"color":"#ED5356"};
      console.log($scope.iconColor1);
      console.log($scope.iconColor1.color);
      if($scope.iconColor1.color=="#ED5356"){
        $scope.iconColor1={"color":"black"};
        console.log("red");
        var index= list.indexOf({"user_id":userId,"category_name":"Arts"});

        list.splice(index,1);
        console.log(list);
      }else{
        $scope.iconColor1={"color":"#ED5356"};
        console.log("black");
        list.push({"user_id":userId,"category_name":"Arts"});
        console.log(list);
      }
   
  };

  $scope.iconColorChange2 = function() {
      console.log($scope.iconColor2);
      console.log($scope.iconColor2.color);
      if($scope.iconColor2.color=="#ED5356"){
        $scope.iconColor2={"color":"black"};
        console.log("red");
        var index= list.indexOf({"user_id":userId,"category_name":"Cars"});
        list.splice(index,1);
        console.log(list);
      }else{
        $scope.iconColor2={"color":"#ED5356"};
        console.log("black");
        list.push({"user_id":userId,"category_name":"Cars"});
        console.log(list);
      }
   
  };
  $scope.iconColorChange3 = function() {
    console.log($scope.iconColor3);
    console.log($scope.iconColor3.color);
    if($scope.iconColor3.color=="#ED5356"){
      $scope.iconColor3={"color":"black"};
      console.log("red");
      var index= list.indexOf({"user_id":userId,"category_name":"Fashion"});
      list.splice(index,1);
      console.log(list);
    }else{
      $scope.iconColor3={"color":"#ED5356"};
      console.log("black");
      list.push({"user_id":userId,"category_name":"Fashion"});
      console.log(list);
    }
   
  };
  $scope.iconColorChange4 = function() {
    console.log($scope.iconColor4);
      console.log($scope.iconColor4.color);
      if($scope.iconColor4.color=="#ED5356"){
        $scope.iconColor4={"color":"black"};
        console.log("red");
        var index= list.indexOf({"user_id":userId,"category_name":"Finance"});
        list.splice(index,1);
        console.log(list);
      }else{
        $scope.iconColor4={"color":"#ED5356"};
        console.log("black");
        list.push({"user_id":userId,"category_name":"Finance"});
        console.log(list);
      }
   
  };
  $scope.iconColorChange5 = function() {
      console.log($scope.iconColor5);
      console.log($scope.iconColor5.color);
      if($scope.iconColor5.color=="#ED5356"){
        $scope.iconColor5={"color":"black"};
        console.log("red");
        var index= list.indexOf({"user_id":userId,"category_name":"Food"});
        list.splice(index,1);
        console.log(list);
      }else{
        $scope.iconColor5={"color":"#ED5356"};
        console.log("black");
        list.push({"user_id":userId,"category_name":"Food"});
        console.log(list);
      }
   
  };
  $scope.iconColorChange6 = function() {
      console.log($scope.iconColor6);
      console.log($scope.iconColor6.color);
      if($scope.iconColor6.color=="#ED5356"){
        $scope.iconColor6={"color":"black"};
        console.log("red");
        var index= list.indexOf({"user_id":userId,"category_name":"Leisure"});
        list.splice(index,1);
        console.log(list);
      }else{
        $scope.iconColor6={"color":"#ED5356"};
        console.log("black");
        list.push({"user_id":userId,"category_name":"Leisure"});
        console.log(list);
      }
   
  };
  $scope.iconColorChange7 = function() {
    console.log($scope.iconColor7);
      console.log($scope.iconColor7.color);
      if($scope.iconColor7.color=="#ED5356"){
        $scope.iconColor7={"color":"black"};
        console.log("red");
        var index= list.indexOf({"user_id":userId,"category_name":"Sports"});
        list.splice(index,1);
        console.log(list);
      }else{
        $scope.iconColor7={"color":"#ED5356"};
        console.log("black");
        list.push({"user_id":userId,"category_name":"Sports"});
        console.log(list);
      }
   
  };
  $scope.iconColorChange8 = function() {
      console.log($scope.iconColor8);
      console.log($scope.iconColor8.color);
      if($scope.iconColor8.color=="#ED5356"){
        $scope.iconColor8={"color":"black"};
        console.log("red");
        var index= list.indexOf({"user_id":userId,"category_name":"Technology"});
        list.splice(index,1);
        console.log(list);
      }else{
        $scope.iconColor8={"color":"#ED5356"};
        console.log("black");
        list.push({"user_id":userId,"category_name":"Technology"});
        console.log(list);
      }
   
  };
  $scope.iconColorChange9 = function() {
      console.log($scope.iconColor9);
      console.log($scope.iconColor9.color);
      if($scope.iconColor9.color=="#ED5356"){
        $scope.iconColor9={"color":"black"};
        console.log("red");
        var index= list.indexOf({"user_id":userId,"category_name":"Travel"});
        list.splice(index,1);
        console.log(list);
      }else{
        $scope.iconColor9={"color":"#ED5356"};
        console.log("black");
        list.push({"user_id":userId,"category_name":"Travel"});
        console.log(list);
      }
   
  };
  // code to go to the different page depend on role

  $scope.submit = function() {
    var role = RegisterService.getRole();
    console.log(RegisterService.getRole());
    console.log(list);
    $http({
      method:'POST',
      url: 'https://incognito.uqcloud.net/api/categories',
      data: list
    }).success(function(data, status, headers,config){
      console.log(data);
      if(role=="crowdies"){
        console.log(RegisterService.getRole());
        $state.go('registerSuggestedCrowdie');
      }
      else{
        console.log(RegisterService.getRole());
        $state.go('menu.boHome');
    }
      
    }).error(function(data,status,headers,config){
      console.log(data);
      var popup = $ionicPopup.alert({
      title: 'There are some mistake please retry',
      okType: 'button-assertive'
      });

    });
    

  };

  
  
});

// controller for crowdieHome.html

app.controller('CrowdieHomeCtrl', function ($scope, $stateParams) {
  
});

// controller for crowdieWorking.html
app.controller('CrowdieWorkingCtrl', function ($scope, $ionicHistory, $stateParams) {
  $scope.goBack = function() {
    $ionicHistory.goBack();
  };


});

//controller for login.html
app.controller('LoginCtrl', function ($scope, $http, $stateParams, $state) {
  // variable for the login data
  $scope.loginData = {
    username: "",
    password: ""
  };
  console.log($scope.loginData);
  console.log($scope.loginData.username);

  // function for getting the data from input and check it to the server
  $scope.login = function() {
    console.log($scope.loginData);
    console.log($scope.loginData.username);
    $http({
      method:'POST',
      url:'https://incognito.uqcloud.net/oauth/token',
      data: { 
        'username': $scope.loginData.username,
        'password': $scope.loginData.password,
        'grant_type': 'password',
        'client_id': 'testclient',
        'client_secret': 'testpass'
      }

    }).success(function(data,status,headers,config){
      console.log(data);
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      localStorage.setItem('scope', data.scope);
      if(data.scope=="crowdies"){
        $state.go('menu.crowdieHome');
      }
      else{
        $state.go('menu.boHome');
      }

    }).error(function(data,status,headers,config){
      console.log(data);
      var popup = $ionicPopup.alert({
      title: 'The data is incorrect please retry',
      okType: 'button-assertive'
      });

    });

  };
  
  

});


//controller for register.html

app.controller('RegisterCtrl', function($scope,$http, $state, $ionicPopup, RegisterService) {
  // make a variable for the Register Data
  $scope.registerData = {
    fullName:"",
    email:"",
    confirmPassword:"",
    password:""

  };

  
  // function for taking the data, check if the data in correct format
  // and send it to the server
  $scope.register = function() {
    console.log($scope.registerData.email);
    console.log($scope.registerData.fullName);
    console.log($scope.registerData.password);
    console.log($scope.registerData.confirmPassword);

    
    $http({
      method:'POST',
      url:'https://incognito.uqcloud.net/api/register',
      data:{"email":$scope.registerData.email,
      "password":$scope.registerData.password,
      "password_confirmation":$scope.registerData.confirmPassword,
      "name":$scope.registerData.fullName}
    }).success(function(data,status,headers,config){
      console.log(data);
      $http({
        method:'POST',
        url:'https://incognito.uqcloud.net/oauth/token',
        data: { 
          'username': $scope.registerData.email,
          'password': $scope.registerData.password,
          'grant_type': 'password',
          'client_id': 'testclient',
          'client_secret': 'testpass'
        }
      }).success(function(data2,status,headers,config){
        console.log(data2);
        localStorage.setItem('access_token', data2.access_token);
        localStorage.setItem('refresh_token', data2.refresh_token);
        localStorage.setItem('scope', data2.scope);
        
        var configs={
          headers:{
            "Authorization":"Bearer "+ data2.access_token
          }
        };
        console.log(configs);
        $http.get("https://incognito.uqcloud.net/private",configs)
        .then(function (response){
          console.log(response);
          localStorage.setItem("user_id",response.data.user_id);
          $state.go('registerRole');
        });
        // $http({
        //   method:'GET',
        //   url:'https://incognito.uqcloud.net/private',
        //   config:configs
        // }).success(function(data3,status,headers,config){
        //   console.log(data3);
        //   localStorage.setItem("user_id",data3.user_id);
        //   $state.go('registerRole');
        // }).error(function(data3,status,headers,config){
        //   console.log(data3);
        // });

      });

      
    }).error(function(data,status,headers,config){
      // console.log(data.email);
      console.log(data);
      var popup = $ionicPopup.alert({
      title: 'The data is incorrect please retry',
      okType: 'button-assertive'
      });
    });
    

    
  }
  

});
// controller for registerRole.html
app.controller('RegisterRoleCtrl', function($scope, $state, $http, RegisterService) {
  // function for choosing whether user crowdie or business owner
  console.log(localStorage.getItem("user_id"));
  console.log(localStorage.getItem("access_token"));

  var userId = localStorage.getItem("user_id");
  var token = localStorage.getItem('access_token');



  var configs={
    headers:{
      "Authorization":"Bearer "+ token
    }
  };

  $scope.chooseCrowdie = function() {
    console.log('pass choose role');
    var data= {
      'user_id': userId,
      'role': 'crowdies'
    };
    $http.put('https://incognito.uqcloud.net/api/role',data, configs)
    .then(function(response){
      console.log(data);
      RegisterService.changeRole('crowdies');
      $state.go('chooseCategories');
    });
    
  };

  $scope.chooseBO = function() {
    console.log('pass choose role');
    var data= {
      'user_id': userId,
      'role': 'business owner'
    };
    $http.put('https://incognito.uqcloud.net/api/role',data, configs)
    .then(function(response){
      console.log(data);
      RegisterService.changeRole('business owner');
      $state.go('connectToTwitter');
    });
    
  };

});

// controller for connectToTwitter.html
app.controller('ConnectToTwitterCtrl', function($scope, $state, $timeout){

  $scope.connectTwitter = function(){
    // var ref = window.open('https://incognito.uqcloud.net/auth/twitter', '_blank', 'location=yes');
    // setTimeout(function() {
    //   ref.close();
      $state.go('chooseCategories');
    // }, 5000);
    // $timeout(function() {
    //   ref.close();

    // }, 1000);
    // $state.go('chooseCategories');
  };
});

// controller for boHome.html 

app.controller('BoHomeCtrl', function($scope, $state){

});

// controller for companyProfileAccepted.html
app.controller('CompanyProfileAcceptedCtrl', function($scope, $state){


});

// controller for companyProfile.html
app.controller('CompanyProfileCtrl', function($scope, $state){
  console.log($scope.companyProfileBody);



});


// controller for menu.html
app.controller('MenuCtrl', function($scope, $state){


});

// controller for registerSuggestedCrowdie.html

app.controller('RegisterSuggestedCrowdieCtrl', function($scope, $state){


});

