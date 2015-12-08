'use strict';

/**
 * @ngdoc function
 * @name restClientApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the restClientApp
 */
angular.module('restClientApp')
  .controller('HistoryCtrl', function ($scope, $localStorage) {
    $scope.$storage = $localStorage;
  });
