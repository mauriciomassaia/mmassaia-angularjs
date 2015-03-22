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
    'ngTouch',
    'ngMaterial'
  ])
  .config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('orange')
      .accentPalette('light-blue');

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
  }]);
