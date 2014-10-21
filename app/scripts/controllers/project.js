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

    projectService.success(function (data, status, headers, config) {
        console.log(data)
        $scope.imagePath = data.image_path;
        // $scope.projects = data.projects;

        var projects = data.projects;
        var selectedProject;

        for (var i = 0; i < projects.length; i++) {
          if (projects[i].name_url == projectId) {
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
