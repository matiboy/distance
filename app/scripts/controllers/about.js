'use strict';

/**
 * @ngdoc function
 * @name distanceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the distanceApp
 */
angular.module('distanceApp')
  .controller('AboutCtrl', function ($scope) {
    var deregisterFunction = $scope.$on('pong', function() {
      console.log('PONG');
    });
  });
