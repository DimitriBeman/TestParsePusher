'use strict';

describe('Controller: ProveedoresCtrl', function () {

  // load the controller's module
  beforeEach(module('bookingApp'));

  var ProveedoresCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProveedoresCtrl = $controller('ProveedoresCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
