// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngResource', 'ngCordovaOauth', 'chart.js',  'ngCordova', 'starter.controllers', 'starter.routes', 'starter.services'])
.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})
.run(function($ionicPlatform) {
    
  $ionicPlatform.ready(function() {
    console.log('sadalkl');
    console.log(window.StatusBar==null);
    console.log(Object.keys(window.StatusBar));
    console.log('sadalkl2');
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      window.StatusBar.overlaysWebView(false);
//      window.StatusBar.backgroundColorByHexString("#ffffff");
//      console.log(StatusBar);
    }
  });
});


