angular.module('picafarm').controller('userCtrl', function ($scope, $location, mainService) {

  $scope.createUser = (user) => {
    console.log('Here is the user: ', user);
    mainService.createAccount(user);

    // Feedback to user
    alert('You created an account');

    // Feedback if error ...
  };

  $scope.loginUser = (user) => {
    console.log('login user activaeted: ', user);
    mainService.loginUser(user);

    alert('Succesfully logged in');
    $location.path('/');
  };
});