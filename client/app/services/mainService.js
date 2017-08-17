angular.module('picafarm').service('mainService', function ($http, $rootScope) {

  this.createAccount = (user) => {
    console.info('Creating this user from createAccount-Service: ', user);
    return $http({
      method: 'POST',
      url: '/register/account/create',
      data: user
    })
      .then((response) => {
        self.checkSessions();
      });
  };

  //endpoint: /user/signup

});