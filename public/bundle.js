'use strict';

angular.module('picafarm', []).config(function () {});
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
"use strict";
'use strict';

angular.module('picafarm').controller('mainCtrl', ["$scope", "$http", function ($scope, $http) {

  // this.farmers = {};
  $scope.farmerArr = [];
  $scope.tester = '!!! test !!!';

  $scope.get = function () {
    $http.get("/search").then(function (response) {
      console.log(response.data);
      $scope.farmerArr = response.data;
    }).catch(function (response) {
      console.log(response);
    });
  };

  $scope.hideComponent = function () {
    var elements = document.getElementsByClassName('farms');
    elements.classList.remove('show');
    elements.className += 'hide';
  };

  $scope.showComponent = function () {
    var elements = document.getElementsByClassName('farms');
    elements.classList.remove('hide');
    elements.className += 'show';
  };

  $scope.get();

  var _name = 'Brian';
  $scope.user = {
    name: function name(newName) {
      // Note that newName can be undefined for two reasons:
      // 1. Because it is called as a getter and thus called with no arguments
      // 2. Because the property should actually be set to undefined. This happens e.g. if the
      //    input is invalid
      return arguments.length ? _name = newName : _name;
    }
  };

  $scope.grabFarmTitle = function (newName) {
    return _name = newName;
  };
}]);
"use strict";
//# sourceMappingURL=bundle.js.map
