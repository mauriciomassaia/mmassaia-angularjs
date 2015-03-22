'use strict';

/**
 * @ngdoc function
 * @name mmassaiaAngularJsApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the mmassaiaAngularJsApp
 */
angular.module('mmassaiaAngularJsApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, projectService) {

    var projectId = $routeParams.projectId;

    $scope.$parent.pageTitle = 'Projects';
    $scope.previousProject = '';
    $scope.nextProject= '';

    projectService.success(function (data, status, headers, config) {
        console.log(data)
        $scope.imagePath = data.image_path;
        // $scope.projects = data.projects;

        var projects = data.projects;
        var selectedProject;
        var len = projects.length;

        $scope.selectedIndex = 0;

        for (var i = 0; i < len; i++) {
          if (projects[i].name_url == projectId) {

            if (i > 0) {
              $scope.previousProject = projects[i - 1];
            }

            if (i < len - 2) {
              $scope.nextProject = projects[i + 1];
            }

            selectedProject = projects[i];
            break;
          }
        };

        if (selectedProject) {
          $scope.project = selectedProject;
          $scope.descHTML = selectedProject.description;
        }

      }).
      error(function (data, status, headers, config) {
        console.log('error')
      });

    $scope.id = $routeParams.projectId;
  });
