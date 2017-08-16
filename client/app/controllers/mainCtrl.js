angular.module('picafarm').controller('mainCtrl', function ($scope, $http) {

  $scope.farmerArr = [];

  $scope.pages = {
    farmerSearchPage: true,
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

  $scope.pageChanger = (val) => {
    for (var item in $scope.pages) {
      if (item === val) {
        $scope.pages[item] = true;
      } else {
        $scope.pages[item] = false;
      }
    }
  };

  $scope.get();

});