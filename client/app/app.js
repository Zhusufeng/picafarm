angular.module('picafarm', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: '<farmer-search></farmer-search>'
      })
      .state('login', {
        url: '/login',
        template: '<login></login>'
      })
      .state('signup', {
        url: '/signup',
        template: '<signup></signup>'
  });

    $urlRouterProvider
      .otherwise('/');

  });

