(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $timeout;
    var consultationService;
    var controller;

    beforeEach(module('babylone'));
    beforeEach(inject(function(_$controller_, _$timeout_, _$log_, _consultationService_) {
      vm = _$controller_('BookConsultationController');
      $timeout = _$timeout_;
      consultationService = _consultationService_;
      controller = _$controller_('BookConsultationController as vm', {
        'consultationService': consultationService
      });
    }));

    it('should have a timestamp creation date', function() {
      expect(vm.creationDate).toEqual(jasmine.any(Number));
    });

    it('should define more than 5 awesome things', function() {
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length === 5).toBeTruthy();
    });

    describe('updateSelection', function () {
      it('should toggle selection if first item is selected in the list', function () {
      });

      it('should set the appointment details when toggling the selection based on the items selected', function () {
        vm.patients = [{id: 2},{id: 1}];
        vm.updateSelection(1,[1,2,3],'patients');
        expect(vm.appointment.patient).toEqual(1);
      })
    });

    describe('bookAppointment function', function () {
      var $q, serviceDeffer;
      beforeEach(inject(function (_$q_) {
        $q = _$q_;
      }));
      it('should send form data to server', function () {
        serviceDeffer = $q.defer();
        serviceDeffer.resolve('form data saved.');
        spyOn(consultationService, 'submitAppointment').and.returnValue(consultationService.promise);
        controller.bookAppointment().then(function (data) {
          expect(data).toEqual('form data saved.');
          expect(controller.msg).toEqual('form data saved.');
        });
      });
    });
  });
})();
