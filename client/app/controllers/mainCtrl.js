angular.module('picafarm').controller('mainCtrl', function ($scope, $http) {

  $scope.farmerArr = [];

  $scope.pages = {
    farmerSearchPage: false,
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
    debugger;
    for (var item in $scope.pages) {
      if (item === val) { 
        $scope.$apply(() => {
          $scope.pages[item] = true;
        });
      } else {
        $scope.$apply(() => {
          $scope.pages[item] = false;
        });
      }
    }
  };

  $scope.get();

});