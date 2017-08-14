angular.module('picafarm').controller('mainCtrl', function($scope, $http) {

  // this.farmers = {};
  $scope.farmerArr = [];
  $scope.tester = '!!! test !!!';

  $scope.selectedFarm = selectedFarm;

  $scope.get = function() {
    $http.get("/search").then(function(response) {
      console.log(response.data);
      $scope.farmerArr = response.data;
    }).catch(function(response) {
      console.log(response);
    });
  };

  $scope.get();
});
