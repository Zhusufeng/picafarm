angular.module('picafarm').controller('userCtrl', function ($scope, mainService) {

  $scope.createUser = (user) => {
    console.log('Here is the user: ', user);
    mainService.createAccount(user);

    // Feedback to user
    alert('You created an account');

    // Feedback if error ...
  };

  //endpoint: /user/signup

});