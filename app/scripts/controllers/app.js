'use strict';

angular.module('mmassaiaAngularJsApp')
  .controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){

    $scope.pageTitle = '';

    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

  }]);
