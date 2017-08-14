'use strict';

angular.module('picafarm', []).config(function () {});
"use strict";
'use strict';

angular.module('picafarm').controller('mainCtrl', ["$scope", "$http", function ($scope, $http) {

  $scope.farmers = {};
  $scope.farmerArr = [];

  $scope.get = function () {
    $http.get("/search").then(function (response) {
      $scope.farmerArr.push(response.data);
    }).catch(function (response) {
      console.log(response);
    });
  };

  $scope.get();
}]);
"use strict";
//# sourceMappingURL=bundle.js.map
