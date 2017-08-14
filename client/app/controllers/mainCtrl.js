angular.module('picafarm').controller('mainCtrl', function($scope, $http) {

  // this.farmers = {};
  $scope.farmerArr = [];
  $scope.tester = '!!! test !!!';


  $scope.get = function() {
    $http.get("/search").then(function(response) {
      console.log(response.data);
      $scope.farmerArr = response.data;
    }).catch(function(response) {
      console.log(response);
    });
  };

  $scope.get();

  var _name = 'Brian';
  $scope.user = {
    name: function(newName) {
     // Note that newName can be undefined for two reasons:
     // 1. Because it is called as a getter and thus called with no arguments
     // 2. Because the property should actually be set to undefined. This happens e.g. if the
     //    input is invalid
     return arguments.length ? (_name = newName) : _name;
    }
  };

  $scope.grabFarmTitle = function(newName) {
    return _name = newName;
  };
});
