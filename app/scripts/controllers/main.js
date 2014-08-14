'use strict';

/**
 * @ngdoc function
 * @name distanceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the distanceApp
 */
angular.module('distanceApp')
  .controller('MainCtrl', function ($scope, $log) {
    $scope.pings = 0;
    $scope.pongs = 0;
    // $scope.$root.$on('ping', function(e, speed) {
    //   console.log(speed);
    //   $scope.pings++;
    //   if(speed < 1000) {
    //     $scope.$root.$emit('fastping', speed);
    //   } else {
    //     $scope.$root.$emit('slowping', speed);

    //   }
    // });
    var deregisterFunction = $scope.$root.$on('pong', function() {
      console.log('pong');
      $scope.pongs++;
    });
    $scope.$on('$destroy', deregisterFunction);
  }).controller('FastNetworkCtrl', function($scope) {
    $scope.fiveHundredAndBelow = 0;
    $scope.higher = 0;
    var addListener = $scope.$root.$on('fastping', function(e, speed) {
      if(speed<500) {
        $scope.fiveHundredAndBelow++;
      } else {
        $scope.higher ++;
      }
    });
  }).controller('SlowNetworkCtrl', function($scope) {
    $scope.twoThousandAndBelow = 0;
    $scope.higher = 0;
    var addListener = $scope.$root.$on('slowping', function(e, speed) {
      if(speed<2000) {
        $scope.twoThousandAndBelow++;
      } else {
        $scope.higher ++;
      }
    });
  });
