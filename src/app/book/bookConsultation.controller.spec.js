(function() {
  'use strict';

  describe('BookConsultationController', function(){
    var consultationService;
    var controller;
    var $scope;
    var $rootScope;

    beforeEach(module('babylone'));
    beforeEach(inject(function(_$controller_, _consultationService_, _$rootScope_) {
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      consultationService = _consultationService_;
      controller = _$controller_("BookConsultationController as vm", {
        '$scope': $scope,
        'consultationService': _consultationService_
      });


    }));

    describe('updateSelection', function () {
      it('should set the selected patient details when toggling the selection based on the items selected', function () {
        controller.patients = [{id: 11}, {id: 12}, {id: 13}];
        controller.appointment = {};
        console.log('controller',controller);
        controller.updateSelection(1,[{id: 11}, {id: 12}, {id: 13}],'patients');
        expect(controller.appointment.patients).toEqual(12);
      });
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
