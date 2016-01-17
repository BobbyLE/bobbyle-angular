'use strict';

/**
 * @ngdoc function
 * @name bobbyleApp.controller:NavController
 * @description
 * # NavController
 * Controller of the bobbyleApp
 */
angular.module('bobbyleApp')
  .controller('NavController', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
