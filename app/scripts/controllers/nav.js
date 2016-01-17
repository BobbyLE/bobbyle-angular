'use strict';

/**
 * @ngdoc function
 * @name bobbyleApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the bobbyleApp
 */
angular.module('bobbyleApp')
  .controller('NavCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
