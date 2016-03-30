(function() {
  'use strict';

  angular
    .module('babylone')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('book', {
        url: '/book',
        templateUrl: 'app/book/BookConsultation.html',
        controller: 'BookConsultationController',
        controllerAs: 'book'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
