angular.module('picafarm').service('mainService', function ($http, $rootScope) {
  let self = this;
  
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

  this.checkSessions = () => {
    console.log('Session Check is activated on Angular Serivce.');
    return $http.get('/api/sessionCheck').then(function (response) {
      return response;
    });
  };

  //endpoint: /user/signup

});