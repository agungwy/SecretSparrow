

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
  .state('loading', {
    url: '/loading',
    templateUrl: 'templates/loading.html'
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
    templateUrl: 'templates/registerSuggestedCrowdie.html',
    controller: 'RegisterSuggestedCrowdieCtrl',
    cache: false

  })

  // business owner connect to twitter linkage
  .state('connectToTwitter', {
    url: '/connectToTwitter',
    templateUrl: 'templates/connectToTwitter.html',
    controller: 'ConnectToTwitterCtrl'
  })
  
    

  // sidebar or navagation drawer linkage, this menu act as parent
 	.state('menu', {
 		url: '/menu',
 		abstract: true,
 		templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
 		

 	})

  // child of menu, dashboard
  .state('menu.dashboard', {
    url: '/menu.dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
        controller: 'DashboardCtrl'
      }
    } 
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

   // child of menu, explore more companies (explore.html)
   .state('menu.explore', {
    url: '/menu.explore',
    views: {
      'menuContent': {
        templateUrl: 'templates/explore.html',
        controller: 'ExploreCtrl'
      }
    } 
  })

   // child of menu, company profile in crowdie side linkage
    .state('menu.companyProfile', {
    url: '/menu.companyProfile',
    cache: false,
    params: {
      hndl: ""
    },
    views: {
      'menuContent':{
      templateUrl: 'templates/companyProfile.html',
      controller: 'CompanyProfileCtrl',
      
      }   
    },

  })

  
  // child of menu, crowdie home linkage
  .state('menu.crowdieHome', {
    url: '/menu.crowdieHome',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/crowdieHome.html',
        controller: 'CrowdieHomeCtrl'
      }
    }
    
  })

  // child of menu, business owner home linkage
  .state('menu.boHome', {
    url: '/menu.boHome',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/boHome.html',
        controller: 'BoHomeCtrl'
        // parameter:[
        //   "üser_id"
        // ]
      }
    }
    
  })

  // child of menu, business owner home linkage
  .state('menu.twitterAccount', {
    url: '/menu.twitterAccount',
    views: {
      'menuContent': {
        templateUrl: 'templates/twitterAccount.html',
        controller: 'TwitterAccountCtrl'
        // parameter:[
        //   "üser_id"
        // ]
      }
    }
    
  })

  .state('boCrowdieList', {
    url: '/boCrowdieList',
    views: {
      'dashboardView': {
        templateUrl: 'templates/boCrowdieList.html',
        controller: 'BoCrowdieListCtrl'

      }
    }
    
  })
  
  .state('menu.statistic', {
    url: '/menu.statistic',
    views: {
      'menuContent': {
        templateUrl: 'templates/statistic.html',
        controller: 'StatisticCtrl'

      }
    }
    
  })
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/starter');
});