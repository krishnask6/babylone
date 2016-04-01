(function () {
  'use strict';
  xdescribe('consultation service', function () {
    var consultationService, httpBackend, constant;
    beforeEach(module('babylone'));

    beforeEach(inject(function (_consultationService_, _$httpBackend_,_constant_) {
      consultationService = _consultationService_;
      httpBackend = _$httpBackend_;
      constant = _constant_;
    }));



    it("should save the form data to server", function () {
      var url = constant.baseUrl + constant.insert;
      var payload = {
        patient: 1,
        doctor:11
      };
      httpBackend.expect('GET', 'assets/locales/en.json')
        .respond({});
      httpBackend.whenPOST(url).respond('form data saved.');
      var promise =  consultationService.submitAppointment(payload);
      promise.then(function (data) {
        expect(data).toEqual('form data saved.');
      });
      httpBackend.flush();
    });

    it("should return list of patients", function () {
      var url = constant.baseUrl + constant.all;
      var patients = [{id: 1}, {id: 2}];
      httpBackend.expect('GET', 'assets/locales/en.json')
        .respond({});
      httpBackend.whenGET(url).respond(patients);
      var promise = consultationService.getPatients();
      promise.then(function (data) {
        expect(data.length).toBeGreaterThan(0);
      });
      httpBackend.flush();
    });

    it("should return list of gethealthCareProfession", function () {
      var url = constant.baseUrl + constant.all;
      var professionals = [{id: 1}, {id: 2}];
      httpBackend.expect('GET', 'assets/locales/en.json')
        .respond({});
      httpBackend.whenGET(url).respond(professionals);
      var promise = consultationService.gethealthCareProfession();
      promise.then(function (data) {
        expect(data.length).toBeGreaterThan(0);
      });
      httpBackend.flush();
    });

    it("should return list of getDoctorDetails", function () {
      var url = constant.baseUrl + constant.all;
      var doctors = [{id: 1}, {id: 2}];
      httpBackend.expect('GET', 'assets/locales/en.json')
        .respond({});
      httpBackend.whenGET(url).respond(doctors);
      var promise = consultationService.getDoctorDetails();
      promise.then(function (data) {
        expect(data.length).toBeGreaterThan(0);
      });
      httpBackend.flush();
    });
  });
})();
