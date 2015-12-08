'use strict';

/**
 * @ngdoc service
 * @name restClientApp.models
 * @description
 * # models
 * Factory in the restClientApp.
 */
angular.module('restClientApp')
  .factory('models', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
