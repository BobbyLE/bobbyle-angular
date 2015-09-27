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
  .config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
          redirectTo: '/about'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
      //check browser support
      if(window.history && window.history.pushState){
        // if you don't wish to set base URL then use this
        $locationProvider.html5Mode({
          enabled: true
        });
      }
  }]);
