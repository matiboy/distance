'use strict';

/**
 * @ngdoc overview
 * @name distanceApp
 * @description
 * # distanceApp
 *
 * Main module of the application.
 */
angular
  .module('distanceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function(NetworkPingService) {
    NetworkPingService.start();

  });
