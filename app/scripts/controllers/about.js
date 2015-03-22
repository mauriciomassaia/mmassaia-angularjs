'use strict';

/**
 * @ngdoc function
 * @name mmassaiaAngularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mmassaiaAngularJsApp
 */
angular.module('mmassaiaAngularJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.$parent.pageTitle = 'About';

    // need to implement this in a service

    $scope.experiences = [{
      date:'April 14 - present',
      company:'<a href="http://www.grumpysailor.com/" target="_blank">Grumpy Sailor</a> - Sydney, Australia',
      role: 'Web Developer'
    },{
      date:'Mar 11 - Feb 14',
      company:'<a href="http://tribalworldwide.com/contact/?officeId=50" target="_blank">Tribal DDB</a> - Sydney, Australia',
      role: 'Flash / Web Developer'
    },{
      date:'Oct 09 - Feb 11',
      company:'<a href="http://www.dm9ddb.com.br/" target="_blank">DM9DDB</a> - São Paulo, Brazil',
      role: 'Flash / Web Developer'
    },{
      date:'Sep 07 - Sep 09',
      company:'hello, Interactive - São Paulo, Brazil',
      role: 'Flash Developer'
    },{
      date:'Jul 04 - Aug 07',
      company:'<a href="http://www.dm9ddb.com.br/" target="_blank">DM9DDB</a> - São Paulo, Brazil',
      role: 'Flash / Web Developer'
    },{
      date:'Fev 03 - Jun 04',
      company:'Grey Interactive - São Paulo, Brazil',
      role: 'Flash / Web Developer'
    }];

    $scope.awards = [
      {date: 'Nov 2014', type: 'Grand Prix', description: 'Got married with Louise'},
      {date: 'Dec 2013', type: 'Gold', description: 'NYE Fireworks at Sydney Harbour Bridge'},
      {date: 'Nov 2013', type: 'Gran Prix', description: 'Road Trip from Sydney to Gold Coast'},
      {date: 'Aug 2013', type: 'Grand Prix', description: 'Adopted Shadow'},
      {date: 'Apr 2013', type: 'Grand Prix', description: 'Adopted Oliver'},
      {date: 'Jan 2013', type: 'Gold', description: 'Trip to Cairns and Uluru'},
      {date: 'Dec 2012', type: 'Grand Prix', description: 'Fiji Trip with Louise'},
      {date: 'Mar 2011', type: 'Epic Grand Prix', description: 'Moved to Australia with Louise'},
      {date: 'Mar 2010', type: 'Epic Grand Prix', description: 'Started dating Louise'},
      {date: 'Mar 2009', type: 'Gold', description: 'Europe Trip with my sister'}
    ];

    $scope.social = [
      {label: "Linkedin", link:"http://au.linkedin.com/in/mauriciomassaia/", icon:'fa-linkedin-square'},
      {label: "Github", link:"http://github.com/mauriciomassaia", icon:'fa-github-square'},
      {label: "Twitter", link:"https://twitter.com/mauriciomassaia/", icon:'fa-twitter-square'},
      {label: "Flickr", link:"http://www.flickr.com/_mauricio", icon:'fa-flickr'},
      {label: "Delicious", link:"https://delicious.com/mauriciomassaia", icon:'fa-delicious'},
      {label: "mauriciomassaia@gmail.com", link:"mailto:mauriciomassaia@gmail.com", icon:'fa-envelope-o'}
    ];
  });
