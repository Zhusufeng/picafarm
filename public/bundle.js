'use strict';

angular.module('picafarm', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: '<farmer-search></farmer-search>'
  }).state('login', {
    url: '/login',
    template: '<login></login>'
  }).state('signup', {
    url: '/signup',
    template: '<signup></signup>'
  }).state('aboutus', {
    url: '/aboutus',
    templateUrl: '/views/aboutus.html'
  }).state('addfarm', {
    url: '/addfarm',
    template: '<h1>it\'s about adding farm.</h1>'
  });

  $urlRouterProvider.otherwise('/');
}]);
'use strict';

angular.module('picafarm').component('farmerPage', {

  bindings: {
    farm: '<'
  },

  templateUrl: 'views/farmerPage.html'

});
'use strict';

angular.module('picafarm').component('farmerSearch', {

  templateUrl: 'views/farmerSearch.html',
  controller: 'mainCtrl'

});
'use strict';

angular.module('picafarm').component('login', {

  templateUrl: 'views/login.html',
  controller: 'userCtrl'

});
'use strict';

angular.module('picafarm').component('navbar', {

  templateUrl: 'views/navbar.html',
  controller: 'mainCtrl'

});
'use strict';

angular.module('picafarm').component('signup', {

  templateUrl: 'views/signup.html',
  controller: 'userCtrl'

});
'use strict';

angular.module('picafarm').controller('mainCtrl', ["$scope", "$http", function ($scope, $http) {

  $scope.farmerArr = [];

  $scope.get = function () {
    $http.get("/search").then(function (response) {
      console.log(response.data);
      $scope.farmerArr = response.data;
    }).catch(function (response) {
      console.log(response);
    });
  };

  $scope.get();
}]);
'use strict';

angular.module('picafarm').controller('userCtrl', ["$scope", "$location", "mainService", function ($scope, $location, mainService) {

  $scope.createUser = function (user) {
    console.log('Here is the user: ', user);
    mainService.createAccount(user);

    // Feedback to user
    alert('You created an account');

    // Feedback if error ...
  };

  $scope.loginUser = function (user) {
    console.log('login user activaeted: ', user);
    mainService.loginUser(user);

    alert('Succesfully logged in');
    $location.path('/');
  };
}]);
'use strict';

angular.module('picafarm').service('mainService', ["$http", "$rootScope", function ($http, $rootScope) {
  var self = this;

  this.createAccount = function (user) {
    console.info('Creating this user from createAccount-Service: ', user);
    return $http({
      method: 'POST',
      url: '/user/signup',
      data: user
    }).then(function (response) {
      self.checkSessions();
    });
  };

  this.loginUser = function (user) {
    console.log('logging in the user from login-mainService: ', user);
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function (response) {
      console.log('Reponse from login-mainService: ', response);
      $rootScope.$emit('user', response.data);
      return response;
    });
  };

  this.checkSessions = function () {
    console.log('Session Check is activated on Angular Serivce.');
    return $http.get('/user/sessionCheck').then(function (response) {
      return response;
    });
  };
}]);
//# sourceMappingURL=bundle.js.map
