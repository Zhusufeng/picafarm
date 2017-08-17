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

  this.loginUser = (user) => {
    console.log('logging in the user from login-mainService: ', user);
    return $http({
        method: 'POST',
        url: '/login',
        data: user
      })
      .then((response) => {
        console.log('Reponse from login-mainService: ', response);
        $rootScope.$emit('user', response.data);
        return response;
      });
  };

  this.checkSessions = () => {
    console.log('Session Check is activated on Angular Serivce.');
    return $http.get('/user/sessionCheck').then(function (response) {
      return response;
    });
  };



});