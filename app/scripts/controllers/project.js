'use strict';

/**
 * @ngdoc function
 * @name mmassaiaAngularJsApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the mmassaiaAngularJsApp
 */
angular.module('mmassaiaAngularJsApp')
  .controller('ProjectCtrl', function ($scope, $location, $routeParams, ProjectService) {

    if (ProjectService.setCurrentProjectByUrlName($routeParams.projectUrlName)) {
      $scope.$parent.pageTitle = 'Projects';
      $scope.imagePath = ProjectService.imagePath;
      $scope.project = ProjectService.currentProject;
      $scope.previousProject = ProjectService.previousProject;
      $scope.nextProject = ProjectService.nextProject;
      $scope.descHTML = $scope.project.description;
      $scope.id = $routeParams.projectId;
    } else {
      console.log('INVALID PROJECT URL NAME');
      $location.path('/');
    }

  });
