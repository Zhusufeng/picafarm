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

angular.module('picafarm').controller('userCtrl', ["$scope", function ($scope) {

  //endpoint: /user/signup

}]);
"use strict";
//# sourceMappingURL=bundle.js.map
