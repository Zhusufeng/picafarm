'use strict';

angular.module('picafarm', []).config(function () {});
"use strict";
'use strict';

angular.module('picafarm').controller('mainCtrl', ["$scope", "$http", function ($scope, $http) {

  // this.farmers = {};
  $scope.farmerArr = [];
  $scope.tester = 'test';
  $scope.get = function () {
    $http.get("/search").then(function (response) {
      console.log(response.data);
      $scope.farmerArr.push(response.data);
    }).catch(function (response) {
      console.log(response);
    });
  };

  $scope.get();
}]);
"use strict";
//# sourceMappingURL=bundle.js.map
