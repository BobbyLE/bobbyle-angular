'use strict';

/**
 * @ngdoc overview
 * @name bobbyleApp
 * @description
 * # bobbyleApp
 *
 * Main module of the application.
 */
angular
  .module('bobbyleApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
          redirectTo: '/about'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkController',
        controllerAs: 'work'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
