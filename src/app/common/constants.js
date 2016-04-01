(function() {
  'use strict';

  angular
    .module('babylone')
    .constant('constant', {
      'baseUrl':'http://localhost:3002/appointment/',
      'insert':'insert',
      'all':'appointments'
    });
})();
