'use strict';

/**
 * @ngdoc function
 * @name mmassaiaAngularJsApp.controller:ProjectlistcontrollerCtrl
 * @description
 * # ProjectlistcontrollerCtrl
 * Controller of the mmassaiaAngularJsApp
 */
angular.module('mmassaiaAngularJsApp')
  .controller('ProjectsListCtrl', [
    '$scope',
    'ProjectService',
    '$location',
    '$routeParams',
    function ($scope, ProjectService, $location, $routeParams) {

      $scope.$parent.pageTitle = 'Projects';
      $scope.projects = ProjectService.projects;
      $scope.imagePath = ProjectService.imagePath;
      $scope.tags = ProjectService.tags;
      $scope.selectedTag = $routeParams.tag;

      var selectedTagWatch = $scope.$watch('selectedTag', function (newValue, oldValue) {
      
        if (newValue !== undefined && newValue !== '') {
          $location.search('tag', newValue);
          $scope.projects = ProjectService.getProjectsByTag(newValue)
        } else if (newValue === undefined) {
          $location.search('tag', null);
          $scope.projects = ProjectService.projects;
          $scope.selectedTag = undefined;
        }
      });

      $scope.openProject = function (projectUrlName) {
        $location.path('/projects/' + projectUrlName);
      };

      $scope.$on('$destroy', function () {
        // unwatch!!!
        selectedTagWatch();
      });
    }]);
