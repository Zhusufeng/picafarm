angular.module('picafarm').controller('mainCtrl', function ($scope, $http) {

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

});