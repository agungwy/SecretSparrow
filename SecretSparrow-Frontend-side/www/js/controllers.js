/* Controller for this project
All of the controller will be in here with different name*/


// angular js variable for controller
var app = angular.module('starter.controllers', [])


// controller for starter.html
app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  localStorage.clear();
  

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

// controller for crowdieWorking.html
app.controller('CrowdieWorkingCtrl', function ($scope, $ionicHistory, $stateParams, $http, $state, $ionicLoading) {
  $scope.goBack = function() {
    $ionicHistory.goBack();
  };
  var handle= localStorage.getItem('handle');
  $scope.show = function() {
      $ionicLoading.show({
        templateUrl: 'templates/loading.html'
      });
    };
  $scope.hide = function(){
          $ionicLoading.hide();
    };
  $scope.accounts = [];
  $scope.title_name = "";
  var config={
  headers:{
   
        "Authorization":"Bearer "+ localStorage.getItem('access_token')
      }         
    };

  $scope.refresh = function() {
    $scope.accounts = [];
    $http.get("https://incognito.uqcloud.net/api/friends?screen_name="+handle+"&handle="+handle, config)
    .then(function(response){
        console.log(response.data);
        $scope.show($ionicLoading);
        var numHp = Math.floor(Math.random() * (response.data.users.length-1));
        var hp = response.data.users[numHp];
        $http.get("https://incognito.uqcloud.net/api/followers?screen_name="+hp.screen_name+"&handle="+handle+"&crowdies_id="+localStorage.getItem("user_id"), config)
        .then(function(response2){

            console.log(response2.data);
            var users = response2.data.users;
            console.log(users);

            for (var i=0; i < users.length; i++){
              // users[i]["number"]=i;
              $scope.accounts.push(users[i]);
              
            }
            $scope.hide($ionicLoading);


        }), function(error){
          $scope.hide($ionicLoading);
          console.log(error);
        }



    }), function(error){
        
        console.log(error);
        $scope.hide($ionicLoading);
      }
  };
  $scope.follow = function follow(screen_name, $index){
      
      $scope.show($ionicLoading);
      var data = {
          "screen_name":screen_name,
          "user_id":localStorage.getItem("user_id"),
          "handle": localStorage.getItem("handle")
      }
      $http.post("https://incognito.uqcloud.net/api/follow", data)
      .then(function(response){
          console.log(response.data);
          // var index = $scope.accounts.indexOf(item);
          console.log($index);
          $scope.accounts.splice($index, 1);
          $scope.hide($ionicLoading);
      }), function(error){
          console.error(error);
          $scope.hide($ionicLoading);
      }
  }
  $http.get("https://incognito.uqcloud.net/api/friends?screen_name="+handle+"&handle="+handle, config)
  .then(function(response){
      console.log(response.data);
      $scope.show($ionicLoading);
      $scope.title_name = handle;
      var numHp = Math.floor(Math.random() * (response.data.users.length-1));
      var hp = response.data.users[numHp];
      $http.get("https://incognito.uqcloud.net/api/followers?screen_name="+hp.screen_name+"&handle="+handle+"&crowdies_id="+localStorage.getItem("user_id"), config)
      .then(function(response2){

          console.log(response2.data);
          var users = response2.data.users;
          console.log(users);

          for (var i=0; i < users.length; i++){
            // users[i]["number"]=i;
            $scope.accounts.push(users[i]);
            
          }
          $scope.hide($ionicLoading);


      }), function(error){
        $scope.hide($ionicLoading);
        console.log(error);
      }



  }), function(error){
      
      console.log(error);
      $scope.hide($ionicLoading);
    }

});

//controller for login.html
app.controller('LoginCtrl', function ($scope,$http, $ionicLoading, $stateParams, $state,$ionicPopup) {
  // variable for the login data
  $scope.loginData = {
    username: "",
    password: ""
  };
  console.log($scope.loginData);
  console.log($scope.loginData.username);
  console.log(localStorage);

  $scope.show = function() {
    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });
  };
  $scope.hide = function(){
        $ionicLoading.hide();
  };

  // function for getting the data from input and check it to the server
  $scope.login = function() {
    $scope.show($ionicLoading);
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
      var config={
        headers:{
          "Authorization":"Bearer "+ data.access_token
        }
      };

      $http.get("https://incognito.uqcloud.net/private",config)
      .then(function(response){
        console.log(response.data);
        
        localStorage.setItem("user_id",response.data.user_id);

        // localStorage.setItem("email",response.data.username);
        if(data.scope=="crowdies"){
          $scope.hide($ionicLoading);
          $state.go('menu.crowdieHome');
        }
        else{
          console.log('redirect');
          $scope.hide($ionicLoading);
          // $state.transitionTo('menu.boHome', null, {'reload':true});
          $state.go('menu.boHome');
        }
        
      });
      

    }).error(function(data,status,headers,config){
      console.log(data);
      $scope.hide($ionicLoading);
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
app.controller('ConnectToTwitterCtrl', function($scope, $http, $cordovaOauth,$ionicPopup, $state, $ionicPlatform, $ionicLoading, TwitterService){
  $scope.show = function() {
    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });
  };
  $scope.twitter=localStorage.getItem("STORAGE.TWITTER.KEY");
  $scope.userID=localStorage.getItem("user_id");
  $scope.hide = function(){
        $ionicLoading.hide();
  };
  $scope.connectTwitter = function(){
    console.log("clicked");
    $scope.show($ionicLoading);
    localStorage.removeItem("STORAGE.TWITTER.KEY");
    $ionicPlatform.ready(function() {
        console.log("platform");

        if (TwitterService.isAuthenticated()) {
            // $scope.showHomeTimeline();
           var data={
              "ss_user_id":localStorage.getItem("user_id"),
              "twitter":JSON.parse(localStorage.getItem("STORAGE.TWITTER.KEY"))
            };
            
            $http({
              method:'POST',
              url:'https://incognito.uqcloud.net/auth/twitter/callback',
              data:data
            }).success(function(data, status, headers,config){
              console.log(data);
              $state.go('chooseCategories');
              $scope.hide($ionicLoading);
            }).error(function(data, status, headers,config){
              console.log(data);
              try{
                $scope.error=data.message;
              }catch(err){
                $scope.error=err;
              }
            });
                
            //   }
            // });
            // $state.go('chooseCategories');
            console.log("authenticated");
        } else {
            TwitterService.initialize().then(function(result) {
              console.log("init")
                if(result === true) {
                  var data={
                    "ss_user_id":localStorage.getItem("user_id"),
                    "twitter":JSON.parse(localStorage.getItem("STORAGE.TWITTER.KEY"))
                  };
                  
                  $http({
                    method:'POST',
                    url:'https://incognito.uqcloud.net/auth/twitter/callback',
                    data:data
                  }).success(function(data, status, headers,config){
                    console.log(data);
                    $state.go('chooseCategories');
                    $scope.hide($ionicLoading);
                  }).error(function(data, status, headers,config){
                    console.log(data);
                    var popup = $ionicPopup.alert({
                      title: data,
                      template: "Please retry again",
                      okType: 'button-assertive'
                      });
                    try{
                      $scope.error=data.message;
                    }catch(err){
                      $scope.error=err;
                    }
                    // $scope.error=data;
                  });
                      // $state.go('chooseCategories');
                  //   }
                  // });

                  
                    // $scope.showHomeTimeline();
                  console.log(true);
                  console.log(result);
                }
            }, function(error){
              $scope.hide($ionicLoading);
              var popup = $ionicPopup.alert({
              title: error,
              template: "Please retry again",
              okType: 'button-assertive'
              });
            });
        }
    });
    
    // // TwitterService.testTwitter();
    // var api_key = "9uWtO2uAnwxzFhY3TafHF91M0"; //Enter your Consumer Key (API Key)
    // var api_secret = "IRHZ5fawFHUkgrlkrBnBETDMNqgXxbhwN8di7BwXNnOiVPAY52"; // Enter your Consumer Secret (API Secret)
    // console.log("twitterlogin function got called");
    // $scope.show($ionicLoading);
    // $cordovaOauth.twitter(api_key, api_secret).then(function(result) {
    //   // var popup = $ionicPopup.alert({
    //   // title: 'We already Synchronize your Twitter Account',
    //   // okType: 'button-assertive'
    //   // });
    //   TwitterService.storeUserToken(result)
    //   console.log(result); //ini hasilnya yg mana? denger suara gue? ga gw ga pake speaker
    //   $scope.hide($ionicLoading);
    //   $state.go("chooseCategories");
      
    // }, function(error) {
    //   console.log(error);
    //   $scope.hide($ionicLoading);
    //   var popup = $ionicPopup.alert({
    //   title: error,
    //   template: "Please retry again",
    //   okType: 'button-assertive'
    //   });
       
    // });


  };
  
  
});

// controller for crowdieHome.html

app.controller('CrowdieHomeCtrl', function ($scope, $http, $state) {
    var userId=localStorage.getItem('user_id');
    var access_token=localStorage.getItem('access_token');
    var config={
      headers:{
        "Authorization":"Bearer "+ access_token
      }
    };

    $scope.workAt = function workAt(handle){
        console.log(handle);
        // localStorage.setItem('handle', handle);
        $state.go('menu.companyProfile', {hndl:handle});
      };

    $http.get("https://incognito.uqcloud.net/api/user?user_id="+userId,config)
    .then(function(response){
      console.log(response.data);
      $scope.name=response.data.name;

    });
    
    $http.get("https://incognito.uqcloud.net/api/work/show/crowdies?crowdies_id="+userId+"&page=1")
      .then(function(response){
      $scope.companiesWork = [];
      $scope.companiesWork2 = [];
      console.log(response.data.data);
      var data = response.data.data;
      console.log($scope.companiesWork2);
      console.log($scope.companiesWork);
      // var x = {
      //   'user_id': 0,
      //   'name':'tai',
      //   'img':'img/logo.png'
      // };
      // var x = data.pop();
      // console.log('here');
      // console.log(x.bo_profile);
      // console.log(data);

      for (i=0; i<3; i++){
        console.log(data);
        $scope.companiesWork.push(data.pop().bo_profile);
        console.log($scope.companiesWork);
        // x.user_id +=1;
      }
      for (i=0; i<3; i++){
        console.log(data);
        $scope.companiesWork2.push(data.pop().bo_profile);
        console.log($scope.companiesWork2)
        // x.user_id +=1;
      }
      console.log($scope.companiesWork);
      console.log($scope.companiesWork2);
     
      
    });
    // var c = 3;
    // for (var i = 0; i<c; i++){
    //   console.log(x);
    //   // $scope.companiesWork.push(x);
    //   console.log($scope.companiesWork);
    //   x.user_id +=1;
    //   name = name +i;
    //   $scope.companiesWork.push(x);
    // }
    // for (var i = 0; i<c; i++){
    //   console.log(x);
    //   // $scope.companiesWork2.push(x);
    //   console.log($scope.companiesWork2);
    //   x.user_id +=1;
    //   name = name +1;
    //   $scope.companiesWork2.push(x);
    // }
    
});

// controller for boHome.html 

app.controller('BoHomeCtrl', function($scope, $http, $state, $ionicLoading){
  
  $scope.show = function() {
    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });
  };
  $scope.hide = function(){
        $ionicLoading.hide();
  };
  console.log("not yet");
  var userId=localStorage.getItem('user_id');
  console.log(userId);
  console.log("loading");
  var access_token=localStorage.getItem('access_token');
  var config={
    headers:{
      "Authorization":"Bearer "+ access_token
    }
  };
  $scope.show($ionicLoading);


  $http.get("https://incognito.uqcloud.net/api/user?user_id="+userId,config)
  .then(function(response){
    console.log(response.data);
    console.log("almost");

    localStorage.setItem("name",response.data.name);
    localStorage.setItem("email",response.data.username);
    $http.get("https://incognito.uqcloud.net/api/user/twitter?user_id="+userId,config)
    .then(function(response){
      console.log(response);
      $scope.name=(response.data[0]).handle;
      $scope.listOfCrowdies = (response.data[0]).crowdies; 
      console.log('updated');
      localStorage.setItem("twitter_id",(response.data[0]).twitter_id);
      localStorage.setItem("handle",(response.data[0]).handle);
      $http.get("https://incognito.uqcloud.net/api/twitter?handle="+localStorage.getItem("handle"))
      .then(function(response){
        console.log(response.data);
        $scope.boData = response.data;
        $scope.hide($ionicLoading);
      }), function(error){

      };
      
    }, function(error){
      $scope.hide($ionicLoading);
    console.log('motherfucker failed');
  });
  }), function(error){
    $scope.hide($ionicLoading);
    console.log('motherfucker');
  };


});

// controller for companyProfile.html
app.controller('CompanyProfileCtrl', function($scope, $state, $ionicLoading, $stateParams,$http){
  console.log("stateParams");

    $http.get("https://incognito.uqcloud.net/api/work/show/crowdies?crowdies_id="+localStorage.getItem("user_id"))

  
  .then(function(response){
    console.log(response.data);
    for (var i = 0; i < response.data.data.length; i++){
        if (response.data.data[i].handle == $stateParams.hndl){
          console.log(response.data.data[i]);
          $scope.applyWork = false;
          $scope.work=true;
          console.log("success");
          break;
        }
        else{
            $scope.applyWork = true;
            $scope.work=false;
            console.log("wrong");

        }

    }
    
    console.log($stateParams.hndl);
    $scope.show = function() {
      $ionicLoading.show({
        templateUrl: 'templates/loading.html'
      });
    };
    $scope.hide = function(){
          $ionicLoading.hide();
    };
    var config={
          headers:{
            "Authorization":"Bearer "+ localStorage.getItem('access_token')
          }
        };
    $scope.show($ionicLoading);
    $http.get("https://incognito.uqcloud.net/api/twitter?handle="+$stateParams.hndl)
    .then(function(response){
      console.log(response.data);
    // var data = response.data;
      localStorage.setItem("handle", $stateParams.hndl);
      $scope.companyData = response.data;
      // $scope.companyName = data.name;
      $http.get("https://incognito.uqcloud.net/api/user/twitter?handle="+$stateParams.hndl, config)
      .then(function(response){
        console.log(response.data);
        $scope.listOfCrowdies = response.data[0].crowdies;
        $scope.hide($ionicLoading);
        // $scope

      }), function(error){
        $scope.hide($ionicLoading);
        console.log(error);
      };
      

    }), function(error){
      $scope.hide($ionicLoading);
      console.log(error);
    }
  }), function(error){
	  console.error(error);
  }
  
  $scope.applyJob = function(){
    $scope.show($ionicLoading);
    $scope.applyWork = false;
    $scope.work=true;
    $scope.hide($ionicLoading);

  };
  $scope.quitJob = function(){
    $scope.show($ionicLoading);
    $scope.applyWork = true;
    $scope.work=false;
    $scope.hide($ionicLoading);

  };



});


// controller for menu.html
app.controller('MenuCtrl', function($scope, $state){
  console.log('connect');

  var role = localStorage.getItem('scope');

  if (role =="crowdies"){
    $scope.crowdie_Role = true;
    $scope.bo_Role = false;
  }
  else if(role=="bo"){
    $scope.crowdie_Role = false;
    $scope.bo_Role = true;

  }
  // $state.logout = function(){
  //   console.log('succes');
  //   localStorage.clear();
  //   $state.go("starter");
  // };
  

});

// explore more companies controller (explore.html)


app.controller('ExploreCtrl', function($scope) {
  
  $scope.items = [
    { imgurl: "http://www.queenslandleaders.com.au/media/website_posts/328/workingmouseNEW.jpg",
          id: "WORKING MOUSE" , following: "364", follower: "5.37K", position: "50"},
    { imgurl: "https://lh6.ggpht.com/4XCF6-CyKE-mEkZXF0vWWi3pjhPc3VgeRRQJg1JeuhnUzFte9yD8dshDF9GYjB1NIik=w300",
          id: "COMMONWEALTH BANK", following: "400", follower: "44K", position: "45"},
    { imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hungry_Jack's.svg/2000px-Hungry_Jack's.svg.png",
          id: "HUNGRY JACK'S", following: "907", follower: "468", position: "30"},
    { imgurl: "http://myfonts-wtf.s3.amazonaws.com/63/63d9062d94f3a5f31f66d42ddb33cb69.539939.png",
          id: "K MART", following: "652", follower: "576", position: "53"},
    { imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/28/Coles_logo.svg",
          id: "COLES", following: "459", follower: "7K", position: "58"},
    { imgurl: "https://www.karrinyupcentre.com.au/Karrinyup/media/contents/04_Stores/01_Store_Logos/Logo_David_Jones_1.jpg?width=640&height=350&ext=.jpg",
          id: "DAVID JONES", following: "558", follower: "1.3M", position: "80"},
    { imgurl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Woolworths_logo_2014.svg/1122px-Woolworths_logo_2014.svg.png",
          id: "WOOLWORTHS", following: "848", follower: "4.37K", position: "30"}
  ];
  
});

// controller for registerSuggestedCrowdie.html

app.controller('RegisterSuggestedCrowdieCtrl', function($scope, $state, $http, $ionicLoading){
  $scope.bo1 = {"border": "5px solid white"};
  $scope.bo2 = {"border": "5px solid white"};
  $scope.bo3 = {"border": "5px solid white"};
  $scope.bo4 = {"border": "5px solid white"};
  $scope.bo5 = {"border": "5px solid white"};
  $scope.bo6 = {"border": "5px solid white"};

  $scope.companies1 = {};
  $scope.companies2 = {};
  $scope.companies3 = {};
  $scope.companies4 = {};
  $scope.companies5 = {};
  $scope.companies6 = {};


  

  $scope.show = function() {
    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });
  };
  $scope.hide = function(){
        $ionicLoading.hide();
  };
  var list = [];
  $scope.show($ionicLoading);
  $http({
      method:'GET',
      url:'https://incognito.uqcloud.net/api/recommended?user_id='+localStorage.getItem('user_id'),
      
  }).success(function(data, status, headers, config){
    console.log(data);
    console.log("passing");
    // console.log(data.splice(0,1).name);
    // console.log(data.splice(0,1));
    var x = data.length;


    $scope.companies1 = data[0];
    $scope.companies2 = data[1];
    $scope.companies3 = data[2];
    $scope.companies4 = data[3];
    $scope.companies5 = data[4];
    $scope.companies6 = data[5];
    console.log($scope.companies1);
    console.log($scope.companies2);
    console.log($scope.companies3);
    console.log($scope.companies4);
    console.log($scope.companies5);
    console.log($scope.companies6);

    if (x < 5 && x > 2 ){
      $scope.list3 = false;
      $scope.list2 = true;
      $scope.list1 = true;
      if (data[3] == null){
        $scope.companies4 = "";
        console.log("null");
      }
    }
    else if(x < 3 && x > 0){
      $scope.list2 = false;
      $scope.list3 = false;
      $scope.list1 = true;
      if (data[1] == null){
        console.log("null");
        $scope.companies1 = "";
      }
    }
    else{
      $scope.list3 = true;
      $scope.list2 = true;
      $scope.list1 = true;
      if (data[5] == null){
        $scope.companies5 = "";
      }
    }
    

    $scope.bo1Click = function(){
      console.log($scope.bo1);
      if ($scope.bo1.border =="5px solid white"){
        $scope.bo1.border = "5px solid #ED5356";
        list.push({"handle":$scope.companies1.handle});
        console.log(list);
        console.log('red');
      }
      else{
        $scope.bo1.border = "5px solid white";
        var index= list.indexOf({"handle":$scope.companies1.handle});
        list.splice(index,1);
        console.log(list);
        console.log('white')
      }
    };
    $scope.bo2Click = function(){
      console.log($scope.bo1);
      if ($scope.bo2.border =="5px solid white"){
        $scope.bo2.border = "5px solid #ED5356";
        list.push({"handle":$scope.companies2.handle});
        console.log(list);
        console.log('red');
      }
      else{
        $scope.bo2.border = "5px solid white";
        var index= list.indexOf({"handle":$scope.companies2.handle});
        list.splice(index,1);
        console.log(list);
        console.log('white')
      }
    };
    $scope.bo3Click = function(){
      console.log($scope.bo1);
      if ($scope.bo3.border =="5px solid white"){
        $scope.bo3.border = "5px solid #ED5356";
        list.push({"handle":$scope.companies3.handle});
        console.log(list);
        console.log('red');
      }
      else{
        $scope.bo3.border = "5px solid white";
        var index= list.indexOf({"handle":$scope.companies3.handle});
        list.splice(index,1);
        console.log(list);
        console.log('white')
      }
    };
    $scope.bo4Click = function(){
      console.log($scope.bo1);
      if ($scope.bo4.border =="5px solid white"){
        $scope.bo4.border = "5px solid #ED5356";
        list.push({"handle":$scope.companies4.handle});
        console.log(list);
        console.log('red');
      }
      else{
        $scope.bo4.border = "5px solid white";
        var index= list.indexOf({"handle":$scope.companies4.handle});
        list.splice(index,1);
        console.log(list);
        console.log('white')
      }
    };
    $scope.bo5Click = function(){
      console.log($scope.bo5);
      if ($scope.bo5.border =="5px solid white"){
        $scope.bo5.border = "5px solid #ED5356";
        list.push({"handle":$scope.companies5.handle});
        console.log(list);
        console.log('red');
      }
      else{
        $scope.bo5.border = "5px solid white";
        var index= list.indexOf({"handle":$scope.companies5.handle});
        list.splice(index,1);
        console.log(list);
        console.log('white')
      }
    };
    $scope.bo6Click = function(){
      console.log($scope.bo6);
      if ($scope.bo6.border =="5px solid white"){
        $scope.bo6.border = "5px solid #ED5356";
        list.push({"handle":$scope.companies6.handle});
        console.log(list);
        console.log('red');
      }
      else{
        $scope.bo6.border = "5px solid white";
        var index= list.indexOf({"handle":$scope.companies6.handle});
        list.splice(index,1);
        console.log(list);
        console.log('white')
      }
    };
    
    
    $scope.hide($ionicLoading);


    // var counter = 2;

    // for(var i=0; i < counter; i++){
    //   console.log(list);
      
    //   console.log(data[i]);
    //   $scope.companies1.push(data[i]);
    // };
    // for(var i=0; i < counter; i++){
    //   console.log(list);
    //   console.log(x);
    //   $scope.companies2.push(data[i]);
    // };
    // for(var i=0; i < counter; i++ ){
    //   console.log(list);
      
    //   console.log(x);
    //   $scope.companies3.push(data[i]);
    // };
    // $scope.bo1Click = function($index){
    
      // $index.border = ""
       
       
      // console.log($scope.bo1);
      // if ($scope.bo1.border =="5px solid white"){
      //   $scope.bo1.border = "5px solid #ED5356";
      //   console.log('red');
      // }
      // else{
      //   $scope.bo1.border = "5px solid white";
      //   console.log('white')
      // }
    // };

    // $scope.data[0]
  }).error(function(data,status,headers,config){
    console.log(data);
    
  });

  $scope.suggestedWorkApply = function(){
    $scope.show($ionicLoading);
    console.log(list);
    $http({
      method:'POST',
      url:'https://incognito.uqcloud.net/api/work',
      data:{
        "crowdies_id":localStorage.getItem('user_id'),
        "companies":list
      }  
      
  }).success(function(data, status, headers, config){
    $scope.hide($ionicLoading);
    console.log(data);
    $state.go('menu.crowdieHome');
  }).error(function(data,status,headers,config){
    $scope.hide($ionicLoading);
    console.log(data);
  });


  }
                  
  
  


  
  
  
});

