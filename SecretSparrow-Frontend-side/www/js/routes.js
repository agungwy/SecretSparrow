

angular.module('starter.routes', [])
/* this file is for linkage between page */
.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  /*linkage of the first menu */
  .state('starter', {
    url: '/starter',
//    cache:false,
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
    cache:false,
    templateUrl: 'templates/registerRole.html',
    controller: 'RegisterRoleCtrl'
     
  })
  // choose categories in registration linkage
  .state('chooseCategories', {
    url: '/chooseCategories',
    cache:false,
    templateUrl: 'templates/chooseCategories.html',
    controller: 'ChooseCategoriesCtrl'  
  })

 // forget password, forgetPassword.html
  .state('forgetPassword', {
    url: '/forgetPassword',
    cache:false,
    templateUrl: 'templates/forgetPassword.html',
    controller: 'ForgetPasswordCtrl'

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
    cache:false,
    templateUrl: 'templates/connectToTwitter.html',
    controller: 'ConnectToTwitterCtrl'
  })

  
  
    

  // sidebar or navagation drawer linkage, this menu act as parent
 	.state('menu', {
 		url: '/menu',
 		abstract: true,
    cache: false,
 		templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
 		

 	})

  // child of menu, dashboard
  .state('menu.dashboard', {
    url: '/menu.dashboard',
//    abstract: true,
    cache: false,
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
    cache: false,
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
//    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/explore.html',
        controller: 'ExploreCtrl'
      }
    } 
  })
  
  .state('menu.editProfile', {
    url: '/menu.editProfile',
//    cache:false,
    views:{
        'menuContent':{
            templateUrl: 'templates/editProfile.html',
            controller: 'EditProfileCtrl'
        }
    }
  })

   // child of menu, company profile in crowdie side linkage
    .state('menu.companyProfile', {
    url: '/menu.companyProfile',
//    cache: false,
    params: {
      hndl: ""
    },
    views: {
      'menuContent':{
      templateUrl: 'templates/companyProfile.html',
      controller: 'CompanyProfileCtrl',
      
      }   
    }

  })
  
  .state('menu.changePassword', {
    url: '/menu.changePassword',
//    cache: false,
    views: {
      'menuContent':{
      templateUrl: 'templates/changePassword.html',
      controller: 'ChangePasswordCtrl',
      
      }   
    }

  })
  
  .state('menu.moreCompanies', {
    url: '/menu.moreCompanies',
//    cache: false,
    views: {
      'menuContent':{
      templateUrl: 'templates/moreCompanies.html',
      controller: 'MoreCompaniesCtrl',
      
      }   
    }

  })

  
  // child of menu, crowdie home linkage
  .state('menu.crowdieHome', {
    url: '/menu.crowdieHome',
//    cache: false,
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
    cache: false,
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
    parent:'menu.dashboard',
//    cache: false,
    views: {
      "tab-bo-crowdie-list": {
        templateUrl: 'templates/boCrowdieList.html',
        controller: 'BoCrowdieListCtrl'

      }
    }
    
  })
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/starter');
});