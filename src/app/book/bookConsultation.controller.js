(function() {
  'use strict';

  angular
    .module('babylone')
    .controller('BookConsultationController', BookConsultationController);

  /** @ngInject */
  function BookConsultationController($timeout, webDevTec, toastr) {
    var vm = this;
    vm.patients = [
      {
        id: 12,
        name: 'Yourself',
        age: 20
      },
      {
        id: 13,
        name: 'Sarah',
        age: 22
      },
      {
        id: 14,
        name: 'Someone Else'
      }
    ];

    vm.healthCareProfession = [
      {
        id: 1,
        name: 'GP',
        description: 'male'
      },
      {
        id: 2,
        name: 'Nurse',
        description: 'Female'
      },
      {
        id: 3,
        name: 'Therapist',
        description: 'Proxy'
      },
      {
        id: 4,
        name: 'Specialist',
        description: ''
      }
    ];

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1459368711387;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
