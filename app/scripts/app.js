'use strict';

/**
 * @ngdoc overview
 * @name mmassaiaAngularJsApp
 * @description
 * # mmassaiaAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('mmassaiaAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/', {
        templateUrl: 'views/projectslist.html',
        controller: 'ProjectsListCtrl'
      })
      .when('/projects/:projectId', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
