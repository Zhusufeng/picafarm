angular.module('picafarm').service('mainService', function ($http, $rootScope) {
  let self = this;

  this.createAccount = (user) => {
    console.info('Creating this user from createAccount-Service: ', user);
    return $http({
      method: 'POST',
      url: '/user/signup',
      data: user
    })
      .then((response) => {
        self.checkSessions();
      });
  };

  this.checkSessions = () => {
    console.log('Session Check is activated on Angular Serivce.');
    return $http.get('/user/sessionCheck').then(function (response) {
      return response;
    });
  };

});