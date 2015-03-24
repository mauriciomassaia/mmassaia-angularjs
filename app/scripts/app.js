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

    var resolveProject = {
        ProjectData: ['ProjectService', '$q', '$rootScope', function (ProjectService, $q) {
          var deferred = $q.defer();

          // check if the data is loaded
          if (ProjectService.loaded) {
            deferred.resolve();
          } else {
            ProjectService.fetch().then(function () {
              deferred.resolve();
            });
          }
          return deferred.promise;
        }]
      };

    var themes = ['red',
      'pink',
      'purple',
      'deep-purple',
      'indigo',
      'blue',
      'light-blue',
      'cyan',
      'teal',
      'green',
      'light-green',
      'lime',
      'yellow',
      'amber',
      'orange',
      'deep-orange',
      'brown',
      'grey',
      'blue-grey'];

    var primary = themes.splice(Math.floor(Math.random() * themes.length -1), 1).toString();
    var accent = themes.splice(Math.floor(Math.random() * themes.length -1), 1).toString();
    
    // USE RANDOM THEMES!
    $mdThemingProvider.theme('default')
      .primaryPalette(primary)
      .accentPalette(accent);

    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/', {
        templateUrl: 'views/projectslist.html',
        controller: 'ProjectsListCtrl',
        resolve: resolveProject,
        reloadOnSearch: false
      })
      .when('/projects/:projectUrlName', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        resolve: resolveProject
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
