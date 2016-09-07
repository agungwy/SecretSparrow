(function() {



var app = angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

});

app.controller('ChooseCategoriesCtrl', function($scope) {
  $scope.iconColor1={"color":"black"};
  $scope.iconColor2={"color":"black"};
  $scope.iconColor3={"color":"black"};
  $scope.iconColor4={"color":"black"};
  $scope.iconColor5={"color":"black"};
  $scope.iconColor6={"color":"black"};
  $scope.iconColor7={"color":"black"};
  $scope.iconColor8={"color":"black"};
  $scope.iconColor9={"color":"black"};

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
  
});

//   // Form data for the login modal
//   $scope.loginData = {};

//   // Create the login modal that we will use later
//   $ionicModal.fromTemplateUrl('templates/login.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });

//   // Triggered in the login modal to close it
//   $scope.closeLogin = function() {
//     $scope.modal.hide();
//   };
  

//   // Open the login modal
//   $scope.login = function() {
//     $scope.modal.show();
//   };

  

//   // Perform the login action when the user submits the login form
//   $scope.doLogin = function() {
//     console.log('Doing login', $scope.loginData);

//     // Simulate a login delay. Remove this and replace with your login
//     // code if using a login system
//     $timeout(function() {
//       $scope.closeLogin();
//     }, 1000);
//   };
// })

// app.controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'Reggae', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 }
//   ];
// })

// app.controller('PlaylistCtrl', function($scope, $stateParams) {
// });

}());