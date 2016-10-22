/* Controller for this project
All of the controller will be in here with different name*/


// angular js variable for controller
var app = angular.module('starter.controllers', ['ngCordova']);

function authHeader(){
    var config={
        headers:{

            "Authorization":"Bearer "+ localStorage.getItem('access_token')
        }         
    };
    return config;
}


// controller for starter.html
app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state,$ionicPlatform) {
    $scope.$on('$ionicView.enter', function(event,data) {
        $ionicPlatform.ready(function() {
            try{
                window.StatusBar.overlaysWebView(false);
                window.StatusBar.styleDefault();
            }catch(err){
                console.error(err);
            }
        });
       
        localStorage.clear();
    });
  

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

});

//controller for chooseCategories.html

app.controller('ChooseCategoriesCtrl', function($scope, $http, $state, $ionicLoading, $ionicPopup,$ionicPlatform) {
  $ionicPlatform.registerBackButtonAction(function (event) {
      event.preventDefault();
  },100);
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

  $scope.show = function() {
    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });
  };
  
  $scope.hide = function(){
        $ionicLoading.hide();
  };


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
    $scope.show($ionicLoading);
    var role = localStorage.getItem('scope');
    console.log(localStorage.getItem('scope'));
    if (list.length == 0){
      list.push({"user_id":userId,"category_name":"Arts"});
      list.push({"user_id":userId,"category_name":"Cars"});
      list.push({"user_id":userId,"category_name":"Fashion"});
      list.push({"user_id":userId,"category_name":"Finance"});
      list.push({"user_id":userId,"category_name":"Food"});
      list.push({"user_id":userId,"category_name":"Leisure"});
      list.push({"user_id":userId,"category_name":"Sports"});
      list.push({"user_id":userId,"category_name":"Technology"});
      list.push({"user_id":userId,"category_name":"Travel"});
      
    }
    console.log(list);
      
    
    $http.post('https://incognito.uqcloud.net/api/categories',list,authHeader())
    .then(function(response){
      console.log(response.data);
      if(role=="crowdies"){
        
        $state.go('registerSuggestedCrowdie');
        $scope.hide($ionicLoading);
      }
      else{
        
        $state.go('menu.boHome');
        $scope.hide($ionicLoading);
      }
      
    },function(error){
      console.log(error);
      $scope.hide($ionicLoading);
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
  $scope.showTitleWork=false;
  $scope.title_name = handle;
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
        if(response.data.users.length>0){
            var numHp = Math.floor(Math.random() * (response.data.users.length-1));
            var hp = response.data.users[numHp];
            $http.get("https://incognito.uqcloud.net/api/followers?screen_name="+hp.screen_name+"&handle="+handle+"&crowdies_id="+localStorage.getItem("user_id"), config)
            .then(function(response2){

                console.log(response2.data);
                var users = response2.data.users;
                console.log(users);
                var strings = [];
                for (var i=0; i < users.length; i++){
                  // users[i]["number"]=i;
                  $scope.accounts.push(users[i]);
                  strings.push(users[i].description);
                  if (users[i].description == ""){
                    $scope.accounts[i]['category_name'] = interests[9].category_name;
                    $scope.accounts[i]['color'] = interests[9].color;
                    $scope.accounts[i]['class'] = interests[9].class;
                  }

                }
                var data = {
                    "description": strings
                }
                console.log(strings);
                $http.post("https://incognito.uqcloud.net/api/classifier", data,config)
                  .then(function(response3){
                    console.log(response3.data);
                    var list = response3.data;
                    console.log(list);
                    for (var i=0; i < list.length; i++){

                      for (var j=0; j < interests.length; j++){

                        if (list[i][0].label == interests[j].category_name){
                          $scope.accounts[list[i][0].index]["category_name"]= interests[j].category_name;
                          $scope.accounts[list[i][0].index]["color"]=interests[j].color;
                          $scope.accounts[list[i][0].index]["class"]=interests[j].class;

                        }
                      }
                    }

    //                $scope.hide($ionicLoading);

                  }, function(error){
                    console.log(error);
                    $scope.hide($ionicLoading);
                  });
                $scope.hide($ionicLoading);
                //Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');


            }, function(error){
              $scope.hide($ionicLoading);
              console.log(error);
              //Stop the ion-refresher from spinning
              $scope.$broadcast('scroll.refreshComplete');
            });

        }else{
            $scope.hide($ionicLoading);
            $scope.showTitleWork=true;
            $scope.nill="No Suggestions for this account";
            //Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');
        }

    }, function(error){
        
        console.log(error);
        $scope.hide($ionicLoading);
        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      });
  };
  $scope.follow = function follow(screen_name, $index){
      
      $scope.show($ionicLoading);
      var data = {
          "screen_name":screen_name,
          "user_id":localStorage.getItem("user_id"),
          "handle": localStorage.getItem("handle")
      }
      $http.post("https://incognito.uqcloud.net/api/follow", data,config)
      .then(function(response){
          console.log(response.data);
          // var index = $scope.accounts.indexOf(item);
          console.log($index);
          $scope.accounts.splice($index, 1);
          $scope.hide($ionicLoading);
      }, function(error){
          console.error(error);
          $scope.hide($ionicLoading);
      });
  }
  $scope.show($ionicLoading);
  $http.get("https://incognito.uqcloud.net/api/friends?screen_name="+handle+"&handle="+handle, config)
  .then(function(response){
      console.log(response.data);
      
      if(response.data.users.length>0){

          $scope.title_name = handle;
          var numHp = Math.floor(Math.random() * (response.data.users.length-1));
          var hp = response.data.users[numHp];

          $http.get("https://incognito.uqcloud.net/api/followers?screen_name="+hp.screen_name+"&handle="+handle+"&crowdies_id="+localStorage.getItem("user_id"), config)
          .then(function(response2){

              console.log(response2.data);
              var users = response2.data.users;
              console.log(users);
              var strings = [];
              for (var i=0; i < users.length; i++){
                // users[i]["number"]=i;

                $scope.accounts.push(users[i]);
                strings.push(users[i].description);
                if (users[i].description == ""){
                  $scope.accounts[i]['category_name'] = interests[9].category_name;
                  $scope.accounts[i]['color'] = interests[9].color;
                  $scope.accounts[i]['class'] = interests[9].class;
                }
              }
              var data = {
                "description": strings
              }
              console.log(strings);
              $http.post("https://incognito.uqcloud.net/api/classifier", data,config)
              .then(function(response3){
                console.log(response3.data);
                var list = response3.data;
                console.log(interests);
                for (var i=0; i < list.length; i++){
                  
                  for (var j=0; j < interests.length; j++){
                    
                    if (list[i][0].label == interests[j].category_name){
                      $scope.accounts[list[i][0].index]["category_name"]= interests[j].category_name;
                      $scope.accounts[list[i][0].index]["color"]=interests[j].color;
                      $scope.accounts[list[i][0].index]["class"]=interests[j].class;
                      
                    }
                  }
                }
                
//                $scope.hide($ionicLoading);

              }, function(error){
                console.log(error);
                $scope.hide($ionicLoading);
              });
              $scope.hide($ionicLoading);


          }, function(error){
            $scope.hide($ionicLoading);
            console.log(error);
          });

      }else{
          $scope.hide($ionicLoading);
          $scope.showTitleWork=true;
          $scope.nill="No Suggestions for this account";
      }



  }, function(error){
      
      console.log(error);
      $scope.hide($ionicLoading);
    });

});

//controller for login.html
app.controller('LoginCtrl', function ($scope,$http, $ionicLoading, $stateParams, $state,$ionicPopup,$ionicPlatform) {
  // variable for the login data
  $ionicPlatform.registerBackButtonAction(function (event) {
      event.preventDefault();
  },100);
  
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
          
          $state.go('menu.crowdieHome');
          $scope.hide($ionicLoading);
        }
        else{
          console.log('redirect');
          
          // $state.transitionTo('menu.boHome', null, {'reload':true});
          $state.go('menu.boHome');
          $scope.hide($ionicLoading);
        }
        
      });
      

    }).error(function(data,status,headers,config){
      console.log(data);
      $scope.hide($ionicLoading);
      var popup = $ionicPopup.alert({
          title: data.error_description,
          okType: 'button-assertive'
      });

    });

  };
  
  

});


//controller for register.html

app.controller('RegisterCtrl', function($scope,$http, $state, $ionicPopup, $ionicLoading,$ionicPlatform) {
  // make a variable for the Register Data
  $ionicPlatform.registerBackButtonAction(function (event) {
      event.preventDefault();
  },100);
  $scope.registerData = {
    fullName:"",
    email:"",
    confirmPassword:"",
    password:""

  };

  $scope.show = function() {
    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });
  };
  
  $scope.hide = function(){
        $ionicLoading.hide();
  };

  
  // function for taking the data, check if the data in correct format
  // and send it to the server
  $scope.register = function() {
    console.log($scope.registerData.email);
    console.log($scope.registerData.fullName);
    console.log($scope.registerData.password);
    console.log($scope.registerData.confirmPassword);
    $scope.show($ionicLoading);
    
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
          $scope.hide($ionicLoading);
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
      if (data.name != null){
        $scope.hide($ionicLoading);
        var popup = $ionicPopup.alert({
        title: data.name,
        okType: 'button-assertive'

        });
        
      }
      else if (data.email != null){
        $scope.hide($ionicLoading);
        var popup = $ionicPopup.alert({
          title: data.email,
          okType: 'button-assertive'
        });
        
      } 
      else{
        $scope.hide($ionicLoading);
        var popup = $ionicPopup.alert({
          title: data.password[0],
          okType: 'button-assertive'
        });

      }
     
    });
    

    
  }
  

});
// controller for registerRole.html
app.controller('RegisterRoleCtrl', function($scope, $state, $http, $ionicLoading,$ionicPlatform) {
  // function for choosing whether user crowdie or business owner
  $ionicPlatform.registerBackButtonAction(function (event) {
      event.preventDefault();
  },100);
  console.log(localStorage.getItem("user_id"));
  console.log(localStorage.getItem("access_token"));

  var userId = localStorage.getItem("user_id");
  var token = localStorage.getItem('access_token');

  $scope.show = function() {
    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });
  };
  
  $scope.hide = function(){
        $ionicLoading.hide();
  };

  var configs={
    headers:{
      "Authorization":"Bearer "+ token
    }
  };

  $scope.chooseCrowdie = function() {
    console.log('pass choose role');
    $scope.show($ionicLoading);
    var data= {
      'user_id': userId,
      'role': 'crowdies'
    };
    $http.put('https://incognito.uqcloud.net/api/role',data, configs)
    .then(function(response){
      console.log(data);
      
      localStorage.setItem('scope', 'crowdies');
      $http({
        method:'POST',
        url:'https://incognito.uqcloud.net/oauth/token',
        data: { 
        
          'refresh_token': localStorage.getItem('refresh_token'),
          'grant_type': 'refresh_token',
          'client_id': 'testclient',
          'client_secret': 'testpass'
        }
      }).success(function(data2,status,headers,config){
        console.log(data2);
        localStorage.setItem('access_token', data2.access_token);
        
        localStorage.setItem('scope', data2.scope);
        $state.go('chooseCategories');
        $scope.hide($ionicLoading);
      });
    });
    
  };

  $scope.chooseBO = function() {
    console.log('pass choose role');
    $scope.show($ionicLoading);
    var data= {
      'user_id': userId,
      'role': 'business owner'
    };
    $http.put('https://incognito.uqcloud.net/api/role',data, configs)
    .then(function(response){
      console.log(data);
      
      localStorage.setItem('scope', 'bo');
      $http({
        method:'POST',
        url:'https://incognito.uqcloud.net/oauth/token',
        data: { 
        
          'refresh_token': localStorage.getItem('refresh_token'),
          'grant_type': 'refresh_token',
          'client_id': 'testclient',
          'client_secret': 'testpass'
        }
      }).success(function(data2,status,headers,config){
        console.log(data2);
        localStorage.setItem('access_token', data2.access_token);
        localStorage.setItem('scope', data2.scope);
        $state.go('connectToTwitter');
        $scope.hide($ionicLoading);
      });
    });
    
  };

});

// controller for connectToTwitter.html
app.controller('ConnectToTwitterCtrl', function($scope, $http, $cordovaOauth,$ionicPopup, $state, $ionicPlatform, $ionicLoading, TwitterService){
  $ionicPlatform.registerBackButtonAction(function (event) {
      event.preventDefault();
  },100);
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
    
    


  };
  
  
});

// controller for crowdieHome.html

app.controller('CrowdieHomeCtrl', function ($scope, $http, $state, $ionicLoading,$ionicPlatform) {

    $ionicPlatform.ready(function() {
//        console.log("masuk crowdies home");
//        console.log(Object.keys(window.StatusBar));
      try{
          window.StatusBar.overlaysWebView(true);
          window.StatusBar.styleLightContent();
      }catch(err){
          console.error(err);
      }
    });
    
    $scope.$on('$ionicView.enter',function(event,data){
        $scope.show = function() {
            $ionicLoading.show({
                templateUrl: 'templates/loading.html'
            });
        };
        $scope.hide = function(){
          $ionicLoading.hide();
        };
        $scope.show($ionicLoading)
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
        $http.get("https://incognito.uqcloud.net/api/user/detail/"+userId,config)
        .then(function(response){
            console.log(response.data);
            $scope.name=response.data.name;
            if(response.data.role=="crowdies"){
                var crowdies=response.data.crowdies;
                $scope.points=crowdies.points;
                console.log(crowdies.points);
                if(crowdies.points>=0 && crowdies.points<=100){
                    $scope.grade="Baby Bird"
                    $scope.gradeColor=levels[0].color;
                    $scope.gradeBg=levels[0].background;
                    $scope.max=" / 100";
                    $scope.progress = 100;
                }else if(crowdies.points>100 && crowdies.points<=300){
                    $scope.grade="Little Bird"
                    $scope.gradeColor=levels[1].color;
                    $scope.gradeBg=levels[1].background;
                    $scope.max=" / 500";
                    $scope.progress = 500;
                }else {
                    $scope.grade="Alpha Bird"
                    $scope.gradeColor=levels[2].color;
                    $scope.gradeBg=levels[2].background;
                    $scope.max=" / 1000";
                    $scope.progress = 1000;
    //                $scope.max=100;
                }
            }

        },function(error){
           $scope.hide($ionicLoading);
            console.error(error);
        });
        $http.get("https://incognito.uqcloud.net/api/work/show/crowdies?crowdies_id="+userId+"&page=1",config)
          .then(function(response){
          $scope.companiesWork = [];
          $scope.companiesWork2 = [];
          console.log(response.data.data);
          var data = response.data.data;
          console.log($scope.companiesWork2);
          console.log($scope.companiesWork);


          for (i=0; i<3; i++){
            if (data.length == 0){
              break;
            }
            else{
              $scope.companiesWork.push(data.pop().bo_profile);
            }


          }
          for (i=0; i<3; i++){
            if (data.length == 0){
              break;
            }
            else{
              $scope.companiesWork2.push(data.pop().bo_profile);
            }

          }

          $scope.hide($ionicLoading);
          console.log($scope.companiesWork);
          console.log($scope.companiesWork2);


        });
    });
    

    

    
    

    
    
});

// controller for boHome.html 

app.controller('BoHomeCtrl', function($scope, $http, $state, $ionicLoading,$ionicPlatform){
//  console.log("masuk window");
//  console.log(Object.keys(window.StatusBar));
  $ionicPlatform.ready(function() {
      try{
          window.StatusBar.overlaysWebView(true);
          window.StatusBar.styleLightContent();
      }catch(err){
          console.error(err);
      }
  });
  
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
  $scope.checkImage=function(imgSrc){
      var c=Math.floor((Math.random() * 3) + 1);
      var imageSource="img/logo.png";
      if(imgSrc!==""){
          imageSource="https://incognito.uqcloud.net"+imgSrc+"?code="+c;
      }
      return imageSource;
  }

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
      $scope.boData = response.data[0];
      localStorage.setItem("twitter_id",(response.data[0]).twitter_id);
      localStorage.setItem("handle",(response.data[0]).handle);
      $http.get("https://incognito.uqcloud.net/api/follow/total_followed/"+localStorage.getItem("handle"),authHeader())
      .then(function(response){
          console.log(response);
          $scope.followedBack=response.data.followed_count;
          $http.get("https://incognito.uqcloud.net/api/work/show/bo?handle="+localStorage.getItem("handle"),config)
          .then(function(response){
              console.log(response);
              
              var crowdies = [];
              var crowdies2 = [];
              var data = response.data;
              for (i=0; i<3; i++){
                if (data.length == 0){
                  break;
                }
                else{
                  crowdies.push(data.shift());
                }
                
                
                // x.user_id +=1;
              }
              for (i=0; i<3; i++){
                if (data.length == 0){
                  break;
                }
                else{
                  crowdies2.push(data.shift());
                }
                
                
                
                // x.user_id +=1;
              }
              $scope.crowdiesWork = crowdies;
              $scope.crowdiesWork2 = crowdies2;
              console.log("crowdies");
              console.log(crowdies);
              console.log(crowdies2)
              
              $scope.hide($ionicLoading);
          },function(error){
              $scope.hide($ionicLoading);
              console.error(error);
          });
          
      },function(error){
          $scope.hide($ionicLoading);
          console.error(error);
      });
//      $http.get("https://incognito.uqcloud.net/api/twitter?handle="+localStorage.getItem("handle"))
//      .then(function(response){
//        console.log(response.data);
        
        
//      }, function(error){
//          console.error(error);
//      });
      
    }, function(error){
      $scope.hide($ionicLoading);
      console.error('fail');
  });
  }, function(error){
    $scope.hide($ionicLoading);
    console.error('failed');
  });


});

// controller for boCrowdieList.html
app.controller('BoCrowdieListCtrl', function($scope,$state,$http, $ionicLoading){
    
    $scope.show = function() {
        $ionicLoading.show({
          templateUrl: 'templates/loading.html'
        });
    };
    $scope.hide = function(){
          $ionicLoading.hide();
    };
  $scope.showListTitle=false;
  $scope.checkImage=function(imgSrc){
      var c=Math.floor((Math.random() * 3) + 1);
      var imageSource="img/logo.png";
      if(imgSrc!==""){
          imageSource="https://incognito.uqcloud.net"+imgSrc+"?code="+c;
      }
      return imageSource;
  }
  
  var handle = localStorage.getItem('handle');

  $scope.removeCrowdie = function removeCrowdie(crowdies_id, $index){
    $scope.show($ionicLoading);
    $http.delete('https://incognito.uqcloud.net/api/work/delete/crowdies?handle='+handle+"&crowdies_id="+crowdies_id,authHeader())
    .then(function(response){
      var data= response.data;
      console.log(data);
      $scope.crowdieList.splice($index, 1);
      $scope.hide($ionicLoading);
    
      
    },function(error){
      console.error(error);
      
      $scope.hide($ionicLoading);

    });
  //   $http.delete("https://incognito.uqcloud.net/api/work/delete/crowdies", data)
  //   .then(function(response){
  //       console.log(response.data);
  //       $scope.crowdieList.splice($index, i);
      
  // }, function(error){
  //   console.error(error);
  // });

  }
  $scope.load=function(){
      $scope.show($ionicLoading);
      $http.get("https://incognito.uqcloud.net/api/follow/total_all/"+handle,authHeader())
        .then(function(response){
          console.log(response.data);
          if (response.data.length == 0){
            $scope.showListTitle=true;
            $scope.crowdieError = "You don't have any crowdies Yet";
            $scope.hide($ionicLoading);
            //Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');
          }
          else{
            $scope.crowdieList = response.data;

              for (var i=0; i < response.data.length; i++){

                if ($scope.crowdieList[i].following == 0 || $scope.crowdieList[i].followed_back== 0){

                  $scope.crowdieList[i]['percent'] = 0;

                }
                else{
                  $scope.crowdieList[i]['percent'] = (($scope.crowdieList[i].followed_back/$scope.crowdieList[i].following)*100).toFixed(2);
                }


               }
            $scope.hide($ionicLoading);
            //Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');
          }



      }, function(error){
        $scope.hide($ionicLoading);
        console.error(error);
        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      });
  };
  //   $http.get("http://private-251c0-secretsparrow.apiary-mock.com/api/follow/total_all/bo")
  //    .then(function(response){
  //      console.log(response.data);
  //      $scope.crowdieList=response.data;
  //      for (var i=0; i < response.data.length; i++){
  //       $scope.crowdieList[i]['percent'] = ($scope.crowdieList[i].followed_back/$scope.crowdieList[i].following)*100;
  //      }

  // });

  $scope.load();
});
// controller for companyProfile.html
app.controller('CompanyProfileCtrl', function($scope, $state, $ionicLoading, $stateParams,$http){
  console.log("stateParams");
  console.log($stateParams.hndl);
  $scope.show = function() {
    $ionicLoading.show({
        templateUrl: 'templates/loading.html'
      });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
  $scope.$on('$ionicView.enter',function(event,data){
      $scope.show($ionicLoading);
      console.log(data.stateParams);
      var config={
        headers:{
            "Authorization":"Bearer "+ localStorage.getItem('access_token')
        }
      };
      
      function getCompanyInformation(){
          $http.get("https://incognito.uqcloud.net/api/work/at?crowdies_id="+localStorage.getItem("user_id")+"&handle="+$stateParams.hndl,config)
          .then(function(response){


            console.log(response.data);
        //    for (var i = 0; i < response.data.data.length; i++){

            console.log(response.data);
            $scope.applyWork = false;
            $scope.work=true;
            console.log("success");
        //      break;




        //    }

            console.log($stateParams.hndl);




        //    $http.get("https://incognito.uqcloud.net/api/twitter?handle="+$stateParams.hndl)
        //    .then(function(response){
        //    console.log(response.data);
            // var data = response.data;
            localStorage.setItem("handle", $stateParams.hndl);
            $scope.companyData = response.data;
              // $scope.companyName = data.name;
        //      $http.get("https://incognito.uqcloud.net/api/user/twitter?handle="+$stateParams.hndl, config)
        //      .then(function(response){
        //    console.log(response.data);
            $scope.listOfCrowdies = response.data.crowdies;

            $scope.position= response.data.position;
            var interested_in=response.data.interested_in;
            console.log(interested_in.length);
            console.log(interests);
            var selectedInterests=[];
            for(var i=0;i<interested_in.length;i++){
                console.log(interested_in[i]);
                for(var j=0;j<interests.length;j++){
                    if(interested_in[i].category_name==interests[j].category_name){

                        selectedInterests.push(interests[j]);
                    }
                }
            }
            $scope.selectedInterests=selectedInterests.slice(0, 3);
            console.log(selectedInterests);
            $scope.hide($ionicLoading);
                // $scope

        //      }), function(error){
        //        $scope.hide($ionicLoading);
        //        console.log(error);
        //      };


        //    }), function(error){
        //      $scope.hide($ionicLoading);
        //      console.log(error);
        //    }
          }, function(error){
              console.error(error);
              if(error.statusText=="Not Found"){
                regenerateInformation();
              }else{
                $scope.hide($ionicLoading);
              }

          });
      }
      function regenerateInformation(){
          $http.get("https://incognito.uqcloud.net/api/user/twitter?handle="+$stateParams.hndl,config)
          .then(function(response){
              $scope.listOfCrowdies = response.data[0].crowdies;
              $scope.position= response.data[0].position;
              $scope.companyData = response.data[0];
              $scope.applyWork = true;
              $scope.work=false;
              console.log("wrong");

              var interested_in=response.data[0].interested_in;
              console.log(interested_in.length);
              console.log(interests);
              var selectedInterests=[];
              for(var i=0;i<interested_in.length;i++){
                console.log(interested_in[i]);
                for(var j=0;j<interests.length;j++){
                    if(interested_in[i].category_name==interests[j].category_name){

                        selectedInterests.push(interests[j]);
                    }
                }
              }
              $scope.selectedInterests=selectedInterests.slice(0, 3);
              console.log(selectedInterests);
              $scope.hide($ionicLoading);

          },function (error){
            console.error(error);
            $scope.hide($ionicLoading);
          });
      }
  
      $scope.applyJob = function(){
        var data={
            "crowdies_id":localStorage.getItem("user_id"),
            "companies":[
                {"handle":$stateParams.hndl}
            ]
        };
        $http.post("https://incognito.uqcloud.net/api/work",data,config)
        .then(function(response){
            $scope.show($ionicLoading);
            $scope.applyWork = false;
            $scope.work=true;
            getCompanyInformation();
    //        $scope.hide($ionicLoading);       
        },function(error){
            console.error(error);
            $scope.hide($ionicLoading);
        });


      };
      $scope.quitJob = function(){

        $http.delete("https://incognito.uqcloud.net/api/work/delete/bo?handle="+$stateParams.hndl+"&crowdies_id="+localStorage.getItem("user_id"),config)
        .then(function(response){
            $scope.show($ionicLoading);
            $scope.applyWork = true;
            $scope.work=false;
            regenerateInformation();
    //        $scope.hide($ionicLoading);
        },function(error){
            console.error(error);
            $scope.hide($ionicLoading);
        });


      };
      
      getCompanyInformation();
  });
  
    

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
app.controller('ExploreCtrl', function($scope, $http, $state, $ionicLoading) {
  $scope.$on('$ionicView.enter', function(event,data) {
      $scope.show = function() {
        $ionicLoading.show({
          templateUrl: 'templates/loading.html'
        });
      };
      $scope.hide = function(){
        $ionicLoading.hide();
      };
      $scope.show($ionicLoading);
      $scope.viewCompany = function viewCompany(handle){
        $state.go('menu.companyProfile', {hndl:handle});
      }
      $http.get("https://incognito.uqcloud.net/api/recommended?user_id="+localStorage.getItem("user_id"),authHeader())
        .then(function(response){
            console.log(response.data);
            $scope.items=response.data;
            $scope.hide($ionicLoading);
            }, function(error){
              $scope.hide($ionicLoading);
              console.log(error);
            });
        });
});

// controller for registerSuggestedCrowdie.html

app.controller('RegisterSuggestedCrowdieCtrl', function($scope, $state, $http, $ionicLoading,$ionicPlatform){
  $ionicPlatform.registerBackButtonAction(function (event) {
      event.preventDefault();
  },100);
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
  $http.get('https://incognito.uqcloud.net/api/recommended?user_id='+localStorage.getItem('user_id'),authHeader())
  .then(function(response){
    
    var data=response.data;
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

    if (x == 1){
      $scope.list1 = true;
      $scope.list2 = false;
      $scope.list3 = false;
      $scope.list4 = false;
      $scope.list5 = false;
      $scope.list6 = false;
    }

    else if (x == 2){
      $scope.list1 = true;
      $scope.list2 = true;
      $scope.list3 = false;
      $scope.list4 = false;
      $scope.list5 = false;
      $scope.list6 = false;
    }
    else if (x == 3){
      $scope.list1 = true;
      $scope.list2 = true;
      $scope.list3 = true;
      $scope.list4 = false;
      $scope.list5 = false;
      $scope.list6 = false;
    }
    else if (x == 4){
      $scope.list1 = true;
      $scope.list2 = true;
      $scope.list3 = true;
      $scope.list4 = true;
      $scope.list5 = false;
      $scope.list6 = false;
    }
    else if (x == 5){
      $scope.list1 = true;
      $scope.list2 = true;
      $scope.list3 = true;
      $scope.list4 = true;
      $scope.list5 = true;
      $scope.list6 = false;
    }
    else if (x == 6){
      $scope.list1 = true;
      $scope.list2 = true;
      $scope.list3 = true;
      $scope.list4 = true;
      $scope.list5 = true;
      $scope.list6 = true;
    }

    // if (x < 5 && x > 2 ){
    //   $scope.list3 = false;
    //   $scope.list2 = true;
    //   $scope.list1 = true;
    //   if (data[3] == null){
    //     $scope.companies4 = "";
    //     console.log("null");
    //   }
    // }
    // else if(x < 3 && x > 0){
    //   $scope.list2 = false;
    //   $scope.list3 = false;
    //   $scope.list1 = true;
    //   if (data[1] == null){
    //     console.log("null");
    //     $scope.companies1 = "";
    //   }
    // }
    // else{
    //   $scope.list3 = true;
    //   $scope.list2 = true;
    //   $scope.list1 = true;
    //   if (data[5] == null){
    //     $scope.companies5 = "";
    //   }
    // }
    

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
  },function(error){
    console.error(error);
    $scope.hide($ionicLoading);
  });

  $scope.suggestedWorkApply = function(){
    $scope.show($ionicLoading);
    console.log(list);
      //need to be changed
    var data={
        "crowdies_id":localStorage.getItem('user_id'),
        "companies":list
    }; 
    $http.post('https://incognito.uqcloud.net/api/work',data,authHeader())
    .then(function(response){
        $scope.hide($ionicLoading);
        console.log(response.data);
        $state.go('menu.crowdieHome');
    },function(error){
        $scope.hide($ionicLoading);
        console.log(error);
    });


  };
  
});

//controller for twitterAccount.html

app.controller("TwitterAccountCtrl", function($scope,$http, $ionicLoading) {
  $scope.show = function() {
    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });
  };
    $scope.hide = function(){
        $ionicLoading.hide();
    };

  
  console.log("twitter");
  $scope.load=function(){
      $scope.show($ionicLoading);
      $http.get("https://incognito.uqcloud.net/api/requests/sent?handle=sunnyhotelbne&user_id="+localStorage.getItem("user_id"),authHeader())
        .then(function(response){
          console.log(response.data);
          
          $scope.records = response.data;
          if (response.data.message != null){
            $scope.hideTwitterAccount = true;
            $scope.showTwitterAccount = false;
          }
          else{
            $scope.hideTwitterAccount = false;
            $scope.showTwitterAccount = true;
          }
          $scope.hide($ionicLoading);
          //Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');
        }, function(error){
          $scope.hide($ionicLoading);
          console.error(error);
          //Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');
        });
  };

    $scope.removeTwitterAccount = function removeTwitterAccount($index,screen_name,handle){
        $scope.show($ionicLoading);
        var data={
            "user_id":localStorage.getItem("user_id"),
            "screen_name":screen_name,
            "handle":handle
        }
        $http.post("https://incognito.uqcloud.net/api/unfollow",data,authHeader())
        .then(function(response2){
          $scope.records.splice($index, 1);
          $scope.hide($ionicLoading);
        },function(error2){
          $scope.hide($ionicLoading);
          console.log(error2);
        });
        
    };
    $scope.load();
    
});

// controller for dashboard.html
app.controller('DashboardCtrl', function($scope, $state,$http, $ionicLoading){
//  $ionicConfigProvider.tabs.position('bottom');
  $scope.show = function() {
    $ionicLoading.show({
        templateUrl: 'templates/loading.html'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
  
  
  $scope.load=function (){
      $scope.show($ionicLoading);
      var handle = localStorage.getItem('handle');
      $http.get("https://incognito.uqcloud.net/api/follow/total_all/"+handle,authHeader())
        .then(function(response){
          console.log(response.data);
          var total = 0;
          var follow = 0;
          var list = response.data;

          for (var i=0; i < list.length; i++){
            total += list[i].following;
            follow += list[i].followed_back;
          }
          $scope.chartLabels = ["Follow Back","Not Follow Back"];

          console.log(total);
          $scope.follow = total;
          $scope.follow_back = follow;
          var not_follow = total - follow;
          $scope.chartData = [follow,not_follow];
          if (total == 0){
            $scope.percentage = 0;
          }
          else{
            $scope.percentage = ((follow/total)*100).toFixed(2);
          }

          console.log('test');
          $scope.chartColors = ["#ED5456", "#D8D8D8"];
          $scope.chartOptions = {
            cutoutPercentage: 80,
            innerTitle: "test"
          };

          $scope.hide($ionicLoading);
          //Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');


      }, function(error){
        $scope.hide($ionicLoading);
        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
        console.error(error);
        
      });
  };
  $scope.load();

  


  // (function (ChartJsProvider) {
  // ChartJsProvider.setOptions({ colors : [ "#ED5456", "#FFFFFF"] });
  // })

});

// controller for forgetPassword.html
app.controller('ForgetPasswordCtrl', function($scope, $state,$http, $ionicLoading, $ionicPopup,$ionicPlatform){
  $ionicPlatform.registerBackButtonAction(function (event) {
      event.preventDefault();
  },100);
  $scope.show = function() {
    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
  $scope.forgotData = {
    email:""
  }
    

    $scope.submitEmail = function(){
      $scope.show($ionicLoading);
      console.log($scope.forgotData.email);
      var data = {
        'email': $scope.forgotData.email
      }
      if ($scope.forgotData.email == undefined){
        $scope.hide($ionicLoading);
        var popup = $ionicPopup.alert({
          title: "Email Format is Wrong",
          okType: 'button-assertive'
          });
      }
      else{
        $http.post("https://incognito.uqcloud.net/password/email", JSON.stringify(data))
          .then(function(response){
            console.log(response.data);
            $scope.hide($ionicLoading);
            var popup = $ionicPopup.alert({
              title: response.data.status,
              okType: 'button-assertive'
              });
            $state.go('starter');
          
      
        }, function(error){
          console.error(error.data);
          $scope.hide($ionicLoading);
           var popup = $ionicPopup.alert({
            title: error.data.email[0],
            okType: 'button-assertive'
            });
          
        });
      }
    }


    
  
  


  // (function (ChartJsProvider) {
  // ChartJsProvider.setOptions({ colors : [ "#ED5456", "#FFFFFF"] });
  // })

});

// explore more companies controller (explore.html)
app.controller('EditProfileCtrl', function($scope, $http, $state, $ionicLoading,$cordovaImagePicker, $ionicActionSheet,$ionicPlatform,$cordovaFileTransfer,$ionicPopup ) {
  $scope.$on('$ionicView.enter',function(event,data){
      var role=localStorage.getItem("scope");
      $scope.showed=true;
      $scope.showedBO=false;
      if(role!=="crowdies"){
          $scope.showed=false;
          $scope.showedBO=true;
      }
      
      $scope.imgSrc="img/logo.png";
      $scope.show = function() {
        $ionicLoading.show({
          templateUrl: 'templates/loading.html'
        });
      };
      $scope.hide = function(){
        $ionicLoading.hide();
      };
      $scope.show($ionicLoading);
      $ionicPlatform.ready(function() {
            $scope.takePic = function() {
        //    var options =   {
        //        quality: 50,
        //        destinationType: Camera.DestinationType.FILE_URI,
        //        sourceType: 0,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
        //        encodingType: 0     // 0=JPG 1=PNG
        //    }
              var options = {
                maximumImagesCount: 1,

              };
        //    navigator.camera.getPicture(onSuccess,onFail,options);
              $cordovaImagePicker.getPictures(options)
              .then(function (results) {
                  for (var i = 0; i < results.length; i++) {
                    console.log('Image URI: ' + results[i]);
                    $scope.imgSrc=results[i];
        //            try{
        //                window.plugins.Base64.encodeFile($scope.imgSrc, function(base64){  // Encode URI to Base64 needed for contacts plugin
        //            $scope.imgSrc = base64;
            //                $scope.addContact();    // Save contact
        //                });
        //            }catch(Exception e){

        //            }
                  }
              }, function(error) {
                  // error getting photos
                  console.error(error);
              });


          }
      });


    //  var onSuccess = function(FILE_URI) {
    //    console.log(FILE_URI);
    //
    //    $scope.$apply();
    //  };
    //  var onFail = function(e) {
    //    console.log("On fail " + e);
    //  }
    //  
      var config={
        headers:{

            "Authorization":"Bearer "+ localStorage.getItem('access_token')
        }         
      };
      var profile_image_url="";
      var position=null;
      $http.get("https://incognito.uqcloud.net/api/user/detail/"+localStorage.getItem("user_id"),config)
      .then(function(response){
          console.log(response.data);
          var data= response.data;
          var inputName=response.data.name;
          $scope.editProfile={
              name:inputName
          };
          if(role=='crowdies'){
              if(response.data.crowdies.profile_picture_url!==""){
                  var c=Math.floor((Math.random() * 3) + 1);
                  profile_image_url="https://incognito.uqcloud.net"+response.data.crowdies.profile_picture_url+"?code="+c;
                  if(profile_image_url!==""){
                      $scope.imgSrc=profile_image_url;
                  }
              }
          }else{
              $scope.editProfile.position=response.data.bo.position;
              position=response.data.bo.position;
          }
          $scope.hide($ionicLoading);

      },function(error){
          console.error(error);
          $scope.hide($ionicLoading);
      });

      $scope.save=function(){

          console.log("saved");
          console.log($scope.imgSrc);
          $scope.show($ionicLoading);
          $ionicPlatform.ready(function() {

              if($scope.imgSrc!="img/logo.png" && $scope.imgSrc!=profile_image_url){
                var data={
                    "name":$scope.editProfile.name,
                    "user_id":localStorage.getItem("user_id"),
                    "role":role
                }
                var options={
                    fileKey:"photo",
                    fileName:$scope.imgSrc.split('/').pop(),
                    chunkedMode: false,
                    mimeType:"image/png",
                    params:data,
                    headers:{
                        "Authorization": "Bearer "+localStorage.getItem("access_token")
                    }
                }
                console.log(options);
                $cordovaFileTransfer.upload('https://incognito.uqcloud.net/api/user/edit',$scope.imgSrc,options)
                .then(function(result){


                    console.log(result.response)
                    $scope.hide($ionicLoading);
                    $ionicPopup.alert({
                      title: "Profile Edited",
                      okType: 'button-assertive'
                    });
                },function(err){
                    console.log("error1");
                    console.error(Object.keys(err));
                    console.error(err.body);
                    console.error(err);
                    $scope.hide($ionicLoading);
                    try{
                        $ionicPopup.alert({
                          title: JSON.parse(err.body).name[0],
                          okType: 'button-assertive'
                        });
                    }catch(error){
                        console.error(error);
                    }
                });
              } else{
                  
                  var data={
                      "user_id":localStorage.getItem("user_id"),
                      "name":$scope.editProfile.name,
                      "role":role
                  }
                  
                  if(role!=="crowdies"){
                      if($scope.editProfile.position>=0 && $scope.editProfile.position<=100){
                          data.position=$scope.editProfile.position;
                          update();
                      }else{
                          data.position=position;
                          $scope.hide($ionicLoading);
                          $ionicPopup.alert({
                              title: "Position should between 0 and 100",
                              okType: 'button-assertive'
                          });
                      }
                      
                  }else{
                      //if crowdies
                      update();
                  }
                  
                  function update(){
                      $http.post('https://incognito.uqcloud.net/api/user/edit',data,authHeader())
                      .then(function(response){
                          $scope.hide($ionicLoading);
                          $ionicPopup.alert({
                              title: response.data.message,
                              okType: 'button-assertive'
                          });
                      },function(error){
                          console.log("error2");
                          console.error(Object.keys(error));
                          console.error(error.data);
                          console.error(error.status);
                          $scope.hide($ionicLoading);
                          $ionicPopup.alert({
                              title: error.data.name[0],
                              okType: 'button-assertive'
                          });
                      });
                  }
              }
              
              
          });
      };


    });
  
});

// controller for companyProfile.html
app.controller('ChangePasswordCtrl', function($scope, $state, $ionicLoading,$http,$ionicPopup){
  
  $scope.show = function() {
    $ionicLoading.show({
        templateUrl: 'templates/loading.html'
      });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
  
  $scope.$on('$ionicView.enter',function(event,data){
      
      $scope.changePassword={
          password:"",
          password_confirmation:""
      };
      
      $scope.change=function(){
          $scope.show($ionicLoading);
          var password={
              "user_id":localStorage.getItem("user_id"),
              "password":$scope.changePassword.password,
              "password_confirmation":$scope.changePassword.password_confirmation
          };
          console.log(password);
          $http.put('https://incognito.uqcloud.net/api/user/password',password,authHeader())
          .then(function(response){
              console.log(response.data);
              $ionicPopup.alert({
                  title: response.data.message,
                  okType: 'button-assertive'
              });
              $scope.hide($ionicLoading);
          },function(error){
              console.error(error);
              if(error.status==404){
                console.log("Not Found");
                $ionicPopup.alert({
                  title: error.data.message,
                  okType: 'button-assertive'
                });
              }else if(error.status==400){
                  console.log("Bad Request");
                  $ionicPopup.alert({
                      title: error.data.password[0],
                      okType: 'button-assertive'
                    });
              }
              $scope.hide($ionicLoading);
          });
      }
//      $scope.hide($ionicLoading);
  });
  
    

});

// controller for companyProfile.html
app.controller('MoreCompaniesCtrl', function($scope, $state, $ionicLoading,$http,$timeout){
  $scope.moredata = false;
  $scope.show = function() {
    $ionicLoading.show({
        templateUrl: 'templates/loading.html'
      });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
//  $scope.numberOfItemsToDisplay = 1;
  var page=1;
  var nextPage=null;
  
  $scope.$on('$ionicView.enter',function(event,data){
      $scope.show($ionicLoading);
      
      $http.get('https://incognito.uqcloud.net/api/work/show/crowdies?crowdies_id='+localStorage.getItem("user_id")+"&page="+page,authHeader())
      .then(function(response){
         console.log(response.data); 
         $scope.items=response.data.data;
         
         if(response.data.next_page_url!==null){
             nextPage="https://incognito.uqcloud.net/api/work/show/crowdies?crowdies_id="+localStorage.getItem("user_id")+"&page="+(page+1);
             
         }else{
             nextPage=null;
         }
         $scope.hide($ionicLoading);
      },function(error){
          console.error(error);
          $scope.hide($ionicLoading);
      });
  });
      $scope.viewCompany = function(handle){
        $state.go('menu.companyProfile', {hndl:handle});
      };
      $scope.loadMore=function(){

          if(nextPage!==null){
              page++;
              $http.get(nextPage,authHeader()).success(function(response){
                  console.log(response);

                  for (var i=0;i<response.data.length;i++){
                      $scope.items.push(response.data[i]);
                  }

                  
                 if(response.next_page_url!==null){
                     nextPage="https://incognito.uqcloud.net/api/work/show/crowdies?crowdies_id="+localStorage.getItem("user_id")+"&page="+(page+1);
                 }else{
                     nextPage=null;
                     $scope.moredata=true;
                 }
                 $scope.$broadcast('scroll.infiniteScrollComplete');
              }).error(function(error){
                  console.error(error);
                  $scope.hide($ionicLoading);
                  $scope.$broadcast('scroll.infiniteScrollComplete');
              });
          }else{
              $scope.moredata=true;
              
          }
      };
    $scope.items=[];


});
