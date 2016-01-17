'use strict';

describe('Controller: WorkController', function () {

  // load the controller's module
  beforeEach(module('bobbyleApp'));

  var WorkController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkController = $controller('WorkController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
