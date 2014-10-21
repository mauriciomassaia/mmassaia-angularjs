'use strict';

/**
 * @ngdoc service
 * @name mmassaiaAngularJsApp.projectService
 * @description
 * # projectService
 * Service in the mmassaiaAngularJsApp.
 */
angular.module('mmassaiaAngularJsApp')
  .service('projectService', function projectService($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $http.get('http://mmassaia.com/admin/data/get', {cache: true});
  });
