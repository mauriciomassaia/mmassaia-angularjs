'use strict';

/**
 * @ngdoc function
 * @name mmassaiaAngularJsApp.controller:ProjectlistcontrollerCtrl
 * @description
 * # ProjectlistcontrollerCtrl
 * Controller of the mmassaiaAngularJsApp
 */
angular.module('mmassaiaAngularJsApp')
  .controller('ProjectsListCtrl', ['$scope', 'projectService', '$location', function ($scope, projectService, $location) {

    $scope.projects = [];
    $scope.imagePath = '';
    $scope.$parent.pageTitle = 'Projects';

    projectService.success(function (data, status, headers, config) {
      $scope.imagePath = data.image_path;
      $scope.projects = data.projects;
    }).
    error(function (data, status, headers, config) {
      console.log('error');
    });

    $scope.openProject = function (projectUrlName) {
      $location.path('/projects/' + projectUrlName);
    };
  }]);
