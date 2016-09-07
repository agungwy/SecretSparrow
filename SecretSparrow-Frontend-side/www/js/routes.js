angular.module('starter.routes', [])
/* this file is for linkage between page */
.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  /*linkage of the first menu */
  .state('starter', {
    url: '/starter',
    templateUrl: 'templates/starter.html',
    controller: 'AppCtrl'

  })

  // register linkage
  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html'
        
  })
  // choose role in registration
  .state('registerRole', {
    url: '/registerRole',
    templateUrl: 'templates/registerRole.html'
     
  })
  .state('chooseCategories', {
    url: '/chooseCategories',
    templateUrl: 'templates/chooseCategories.html',
    controller: 'ChooseCategoriesCtrl'  
    
    
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'

  })
  
    


   	.state('menu', {
   		url: '/menu',
   		abstract: true,
   		templateUrl: 'templateUrl/menu.html',
   		controller: 'AppCtrl'

   	})
  

  .state('menu.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('menu.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('menu.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('menu.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/starter');
});