'use strict';

angular.module('picafarm', []).config(function () {});
"use strict";
'use strict';

angular.module('picafarm').controller('mainCtrl', ["$scope", "$http", function ($scope, $http) {

  // this.farmers = {};
  this.farmerArr = [];

  this.get = function () {
    $http.get("/search").then(function (response) {
      this.farmerArr.push(response.data);
    }).catch(function (response) {
      console.log(response);
    });
  };

  this.get();
}]);
"use strict";
//# sourceMappingURL=bundle.js.map
