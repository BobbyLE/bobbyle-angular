'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('bobbyleApp'));

  var NavCtrl,
    scope,
    createController,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope.$new();

    createController = function() {
      return $controller('NavCtrl', {
        '$scope': scope,
        'location': location
      });
    };
  }));

  it('should have a method to check if the path is active', function() {
    var controller = createController();
    location.path('/about');
    expect(location.path()).toBe('/about');
    expect(scope.isActive('/about')).toBe(true);
    expect(scope.isActive('/contact')).toBe(false);
  });
});
