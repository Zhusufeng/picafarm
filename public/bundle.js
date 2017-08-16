'use strict';

angular.module('picafarm', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state('home', {
        url: '/',
        template: '<farmer-search></farmer-search>'
    }).state('login', {
        url: '/login',
        template: '<login></login>'
    });

    $urlRouterProvider.otherwise('/');
}]);
'use strict';

angular.module('picafarm').component('farmerPage', {

  bindings: {
    farm: '<'
  },

  // controller: 'mainCtrl',  

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
  controller: 'mainCtrl'

});
'use strict';

angular.module('picafarm').component('navbar', {

  templateUrl: 'views/navbar.html',
  controller: 'mainCtrl'

});
'use strict';

angular.module('picafarm').controller('mainCtrl', ["$scope", "$http", function ($scope, $http) {

  $scope.farmerArr = [];

  $scope.pages = {
    farmerSearchPage: false,
    loginPage: false,
    signUpPage: false
  };

  $scope.get = function () {
    $http.get("/search").then(function (response) {
      console.log(response.data);
      $scope.farmerArr = response.data;
    }).catch(function (response) {
      console.log(response);
    });
  };

  $scope.pageChanger = function (val) {
    debugger;
    for (var item in $scope.pages) {
      if (item === val) {
        $scope.$apply(function () {
          $scope.pages[item] = true;
        });
      } else {
        $scope.$apply(function () {
          $scope.pages[item] = false;
        });
      }
    }
  };

  $scope.get();
}]);
"use strict";
//# sourceMappingURL=bundle.js.map
