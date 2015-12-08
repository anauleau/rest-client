'use strict';

/**
 * @ngdoc function
 * @name restClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the restClientApp
 */
angular.module('restClientApp')
  .controller('MainCtrl', function ($scope, $localStorage) {
    $scope.$storage = $localStorage;
    $scope.$storage.experience = $scope.$storage.experience ? true : false; 
  });
