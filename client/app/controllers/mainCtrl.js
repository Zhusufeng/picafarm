angular.module('picafarm').controller('mainCtrl', function ($scope, $http) {

  $scope.farmerArr = [];

  // $scope.farmerSearchPage = true;
  // $scope.loginPage = false;
  // $scope.signUpPage = false;

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
    if (val) {

    }
  };

  $scope.get();

});