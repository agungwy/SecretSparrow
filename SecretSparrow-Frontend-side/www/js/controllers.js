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

app.controller('ChooseCategoriesCtrl', function($scope, $state, RegisterService) {
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
      }else{
        $scope.iconColor1={"color":"#ED5356"};
        console.log("black");
      }
   
  };

  $scope.iconColorChange2 = function() {
      console.log($scope.iconColor2);
      console.log($scope.iconColor2.color);
      if($scope.iconColor2.color=="#ED5356"){
        $scope.iconColor2={"color":"black"};
        console.log("red");
      }else{
        $scope.iconColor2={"color":"#ED5356"};
        console.log("black");
      }
   
  };
  $scope.iconColorChange3 = function() {
    console.log($scope.iconColor3);
    console.log($scope.iconColor3.color);
    if($scope.iconColor3.color=="#ED5356"){
      $scope.iconColor3={"color":"black"};
      console.log("red");
    }else{
      $scope.iconColor3={"color":"#ED5356"};
      console.log("black");
    }
   
  };
  $scope.iconColorChange4 = function() {
    console.log($scope.iconColor4);
      console.log($scope.iconColor4.color);
      if($scope.iconColor4.color=="#ED5356"){
        $scope.iconColor4={"color":"black"};
        console.log("red");
      }else{
        $scope.iconColor4={"color":"#ED5356"};
        console.log("black");
      }
   
  };
  $scope.iconColorChange5 = function() {
      console.log($scope.iconColor5);
      console.log($scope.iconColor5.color);
      if($scope.iconColor5.color=="#ED5356"){
        $scope.iconColor5={"color":"black"};
        console.log("red");
      }else{
        $scope.iconColor5={"color":"#ED5356"};
        console.log("black");
      }
   
  };
  $scope.iconColorChange6 = function() {
      console.log($scope.iconColor6);
      console.log($scope.iconColor6.color);
      if($scope.iconColor6.color=="#ED5356"){
        $scope.iconColor6={"color":"black"};
        console.log("red");
      }else{
        $scope.iconColor6={"color":"#ED5356"};
        console.log("black");
      }
   
  };
  $scope.iconColorChange7 = function() {
    console.log($scope.iconColor7);
      console.log($scope.iconColor7.color);
      if($scope.iconColor7.color=="#ED5356"){
        $scope.iconColor7={"color":"black"};
        console.log("red");
      }else{
        $scope.iconColor7={"color":"#ED5356"};
        console.log("black");
      }
   
  };
  $scope.iconColorChange8 = function() {
      console.log($scope.iconColor8);
      console.log($scope.iconColor8.color);
      if($scope.iconColor8.color=="#ED5356"){
        $scope.iconColor8={"color":"black"};
        console.log("red");
      }else{
        $scope.iconColor8={"color":"#ED5356"};
        console.log("black");
      }
   
  };
  $scope.iconColorChange9 = function() {
      console.log($scope.iconColor9);
      console.log($scope.iconColor9.color);
      if($scope.iconColor9.color=="#ED5356"){
        $scope.iconColor9={"color":"black"};
        console.log("red");
      }else{
        $scope.iconColor9={"color":"#ED5356"};
        console.log("black");
      }
   
  };
  // code to go to the different page depend on role

  $scope.submit = function() {
    var role = RegisterService.getRole();
    console.log(RegisterService.getRole());
    if(role==1){
      console.log(RegisterService.getRole());
      $state.go('registerSuggestedCrowdie');
    }
    else{
      console.log(RegisterService.getRole());
      $state.go('menu.boHome');
    }

  };

  
  
});

// controller for crowdieHome.html

app.controller('CrowdieHomeCtrl', function ($scope, $stateParams) {
  
});

// controller for crowdieWorking.html
app.controller('CrowdieWorkingCtrl', function ($scope, $ionicHistory, $stateParams) {
  $scope.goBack = function() {
    $ionicHistory.goBack();
  }
});

//controller for login.html
app.controller('LoginCtrl', function ($scope, $stateParams, $state) {
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
    if($scope.loginData.username=="crowdie@workingmouse.com"){
      console.log('crowdie');
      $state.go('menu.crowdieHome');
    }  
    else if($scope.loginData.username=="businessOwner@workingmouse.com"){
      console.log('bo');
      $state.go('menu.boHome');
    }
    else{
      console.log('else');
      $state.go('login');
    }
  }
  

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

    // check if the one of the input empty or not
    // if($scope.registerData.fullName=="" || 
    //   $scope.registerData.email=="" ||
    //   $scope.registerData.confirmPassword=="" ||
    //   $scope.registerData.password==""){
    //   var popup = $ionicPopup.alert({
    //     title: 'Please fill all of the form',
    //     okType: 'button-assertive'
    //   });
    // }

    // else{
      $http({
        method:'POST',
        url:'https://incognito.uqcloud.net/api/register',
        data:{"email":$scope.registerData.email,
        "password":$scope.registerData.password,
        "password_confirmation":$scope.registerData.confirmPassword,
        "name":$scope.registerData.fullName}
      }).success(function(data,status,headers,config){
        console.log(data);
        // $state.go('registerRole');
      }).error(function(data,status,headers,config){
        // console.log(data.email);
        console.log(data);
        var popup = $ionicPopup.alert({
        title: 'The data is incorrect please retry',
        okType: 'button-assertive'
        });
      });
    // }

    
  }
  

});
// controller for registerRole.html
app.controller('RegisterRoleCtrl', function($scope, $state, RegisterService) {
  // function for choosing whether user crowdie or business owner
  $scope.chooseCrowdie = function() {
    console.log('pass choose role');
    
    RegisterService.changeRole(1);
    console.log(RegisterService.getRole());
  };

  $scope.chooseBO = function() {
    console.log('pass choose role');
    
    RegisterService.changeRole(2);
    console.log(RegisterService.getRole());
  };

});


