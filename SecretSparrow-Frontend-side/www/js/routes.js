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
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
        
  })
  // choose role in registration
  .state('registerRole', {
    url: '/registerRole',
    templateUrl: 'templates/registerRole.html',
    controller: 'RegisterRoleCtrl'
     
  })
  .state('chooseCategories', {
    url: '/chooseCategories',
    templateUrl: 'templates/chooseCategories.html',
    controller: 'ChooseCategoriesCtrl'  
  })

 

 
    
  
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'

  })

  .state('registerSuggestedCrowdie', {
    url: '/registerSuggestedCrowdie',
    templateUrl: 'templates/registerSuggestedCrowdie.html'

  })

  .state('registerDescribeBO',  {
    url: '/registerDescribeBO',
    templateUrl: 'templates/registerDescribeBO.html'

  })

  .state('connectToTwitter', {
    url: '/connectToTwitter',
    templateUrl: 'templates/connectToTwitter.html'
  })
  
  // .state('crowdieHome', {
  //   url: '/crowdieHome',
  //   templateUrl: 'templates/crowdieHome.html'
  // })

  // .state('boHome', {
  //   url: '/boHome',
  //   templateUrl: 'templates/boHome.html'
  // })
    


 	.state('menu', {
 		url: '/menu',
 		abstract: true,
 		templateUrl: 'templates/menu.html',
 		

 	})
   .state('menu.crowdieWorking', {
    url: '/menu.crowdieWorking',
    views: {
      'menuContent': {
        templateUrl: 'templates/crowdieWorking.html',
        controller: 'CrowdieWorkingCtrl'
      }
    }
    
    
    
   
  })

    .state('menu.companyProfile', {
    url: '/menu.companyProfile',
    views: {
      'menuContent':{
      templateUrl: 'templates/companyProfile.html'  
      }
        
    }
    
  })

  .state('menu.companyProfileAccepted', {
    url: '/menu.companyProfileAccepted',
    views: {
      'menuContent':{
      templateUrl: 'templates/companyProfileAccepted.html'  
      }
        
    }
    
  })
  
  .state('menu.crowdieHome', {
    url: '/menu_crowdieHome',
    views: {
      'menuContent': {
        templateUrl: 'templates/crowdieHome.html',
        AppCtrl: 'CrowdieHomeCtrl'
      }
    }
    
  })

  .state('menu.boHome', {
    url: '/menu_boHome',
    views: {
      'menuContent': {
        templateUrl: 'templates/boHome.html'
      }
    }
    
  })

  // .state('menu.search', {
  //   url: '/search',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/search.html'
  //     }
  //   }
  // })


  // .state('menu.browse', {
  //     url: '/browse',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/browse.html'
  //       }
  //     }
  //   })
  //   .state('menu.playlists', {
  //     url: '/playlists',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/playlists.html',
  //         controller: 'PlaylistsCtrl'
  //       }
  //     }
  //   })

  // .state('menu.single', {
  //   url: '/playlists/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html',
  //       controller: 'PlaylistCtrl'
  //     }
  //   }
  // })
  
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/starter');
});