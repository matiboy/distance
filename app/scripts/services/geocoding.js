'use strict';

/**
 * @ngdoc service
 * @name distanceApp.Geocoding
 * @description
 * # Geocoding
 * Service in the distanceApp.
 */
angular.module('distanceApp')
  .service('NetworkPingService', function($timeout, $rootScope) {
    // Starts pongs
    function randomizePong() {
      var pong = Math.random() * 3000;
      $timeout(function() {
        $rootScope.$broadcast('pong');
        randomizePong();
      }, pong);
    }
    function randomizePing() {
      var ping = Math.random() * 3000;
      $timeout(function() {
        $rootScope.$emit('ping', ping);
        randomizePing();
      }, ping);
    }
    return {
      start: function() {
        randomizePing();
        randomizePong();

      }
    }
  });

