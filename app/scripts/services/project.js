'use strict';

/**
 * @ngdoc service
 * @name mmassaiaAngularJsApp.projectService
 * @description
 * # projectService
 * Service in the mmassaiaAngularJsApp.
 */
angular.module('mmassaiaAngularJsApp')
  .service('ProjectService', function ($http, $q) {
    this.loaded = false;
    this.projects = [];
    this.tags = [];
    this.imagePath = '';
    this.currentProject = '';
    this.nextProject = '';
    this.previousProject = '';

    var projectsDict = {};
    var tagsDict = {};

    this.parse = function (data) {
      var projectslen = data.projects.length;
      var project;
      var previousIndex;
      var nextIndex;
      var tagslen = data.tags.length;
      var i;
      var j;
      this.loaded = true;
      this.projects = data.projects;
      this.imagePath = data.image_path;
      this.tags = data.tags;
      console.log(data.tags);
      for (i = 0; i < tagslen; i++) {
        tagsDict[this.tags[i].name] = [];
      }

      for (i = 0; i < projectslen; i++) {
        project = this.projects[i];
        nextIndex = (i + 1) % projectslen;
        previousIndex = (i - 1 + projectslen) % projectslen;
        projectsDict[project.name_url] = {
          current: project,
          next: this.projects[nextIndex],
          previous: this.projects[previousIndex]
        };

        for (j = 0; j < project.tags.length; j++) {
          // save the project's reference in the tagsDict
          tagsDict[project.tags[j].name].push(project);
        }
      }
    };

    this.fetch = function () {
      var _this = this;
      var deferred = $q.defer();
      $http.get('http://mmassaia.com/admin/data/get', {cache: true})
        .success(function (data) {
          _this.parse(data);
          deferred.resolve();
        })
        .error(function () {
          deferred.reject('error loading projects');
        });
      return deferred.promise;
    };

    this.getProjectsByTag = function (tag) {
      return tagsDict[tag];
    }

    /**
     * Set the currentProject, nextProject and previousProject
     * based on the project's nameUrl 
     * nameUrl is the Projects Name converted to lowercase and dash.
     **/
    this.setCurrentProjectByUrlName = function (nameUrl) {
      if (projectsDict[nameUrl] !== undefined) {
        this.currentProject = projectsDict[nameUrl].current;
        this.nextProject = projectsDict[nameUrl].next;
        this.previousProject = projectsDict[nameUrl].previous;
        return true;
      }
      return false;
    };
    return this;
  });
