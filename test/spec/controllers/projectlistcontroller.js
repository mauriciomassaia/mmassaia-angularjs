'use strict';

describe('Controller: ProjectlistcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('mmassaiaAngularJsApp'));

  var ProjectlistcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectlistcontrollerCtrl = $controller('ProjectlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
