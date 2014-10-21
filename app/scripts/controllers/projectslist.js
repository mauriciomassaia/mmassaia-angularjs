'use strict';

/**
 * @ngdoc function
 * @name mmassaiaAngularJsApp.controller:ProjectlistcontrollerCtrl
 * @description
 * # ProjectlistcontrollerCtrl
 * Controller of the mmassaiaAngularJsApp
 */
angular.module('mmassaiaAngularJsApp')
  .controller('ProjectsListCtrl', function ($scope, projectService) {
    
    $scope.projects = [];
    $scope.imagePath = '';

    projectService.success(function (data, status, headers, config) {
        console.log(data);
        $scope.imagePath = data.image_path;
        $scope.projects = data.projects;
      }).
      error(function (data, status, headers, config) {
        console.log('error');
      });

  });
