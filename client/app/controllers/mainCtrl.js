angular.module('picafarm').controller('mainCtrl', function($scope, $http) {

  $scope.farmers = {}
  $scope.farmerArr = [];
  $scope.get();
  $scope.get = function() {
    $http.get("/search").then(function(response) {
      farmerArr.push(response.data);
    }).catch(function(response) {
      console.log(response);
    });
  };
});
