
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
  // choose role in registration linkage
  .state('registerRole', {
    url: '/registerRole',
    templateUrl: 'templates/registerRole.html',
    controller: 'RegisterRoleCtrl'
     
  })
  // choose categories in registration linkage
  .state('chooseCategories', {
    url: '/chooseCategories',
    templateUrl: 'templates/chooseCategories.html',
    controller: 'ChooseCategoriesCtrl'  
  })

 

 
    
  // login linkage
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'

  })

  // crowdie get suggestion of work in registration linkage
  .state('registerSuggestedCrowdie', {
    url: '/registerSuggestedCrowdie',
    templateUrl: 'templates/registerSuggestedCrowdie.html'

  })


  // business owner describe more of company linkage
  .state('registerDescribeBO',  {
    url: '/registerDescribeBO',
    templateUrl: 'templates/registerDescribeBO.html'

  })


  // business owner connect to twitter linkage
  .state('connectToTwitter', {
    url: '/connectToTwitter',
    templateUrl: 'templates/connectToTwitter.html'
  })
  
    

  // sidebar or navagation drawer linkage, this menu act as parent
 	.state('menu', {
 		url: '/menu',
 		abstract: true,
 		templateUrl: 'templates/menu.html',
 		

 	})

  // child of menu, crowdie working linkage
   .state('menu.crowdieWorking', {
    url: '/menu.crowdieWorking',
    views: {
      'menuContent': {
        templateUrl: 'templates/crowdieWorking.html',
        controller: 'CrowdieWorkingCtrl'
      }
    } 
  })

   // child of menu, company profile in crowdie side linkage
    .state('menu.companyProfile', {
    url: '/menu.companyProfile',
    views: {
      'menuContent':{
      templateUrl: 'templates/companyProfile.html'  
      }   
    }
  })

  // child of menu, company profile while crowdie accepted linkage
  .state('menu.companyProfileAccepted', {
    url: '/menu.companyProfileAccepted',
    views: {
      'menuContent':{
      templateUrl: 'templates/companyProfileAccepted.html'  
      }
        
    }
    
  })
  
  // child of menu, crowdie home linkage
  .state('menu.crowdieHome', {
    url: '/menu_crowdieHome',
    views: {
      'menuContent': {
        templateUrl: 'templates/crowdieHome.html',
        AppCtrl: 'CrowdieHomeCtrl'
      }
    }
    
  })

  // child of menu, business owner home linkage
  .state('menu.boHome', {
    url: '/menu_boHome',
    views: {
      'menuContent': {
        templateUrl: 'templates/boHome.html'
      }
    }
    
  })
  
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/starter');
});