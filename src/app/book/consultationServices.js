(function() {
    'use strict';

    angular
        .module('babylone')
        .service('consultationService', consultationService);

    /** @ngInject */
    function consultationService($http, $q, constant) {
      /** Service to get the patient from the API*/
      this.getPatients = function () {
          var deferred = new $q.defer();
          /** Using temporary JSON files to mock the data */
          $http({method:'GET', url:'/resources/patients.json'})
              .then(function(response){
                  deferred.resolve(response.data);
              },function(response){
                  deferred.reject(response.data);
              });
          return deferred.promise;
      };

      /** Service to get the health care profession details from the API*/
      this.gethealthCareProfession = function () {
          var deferred = new $q.defer();
          /** Using temporary JSON files to mock the data */
          $http({method:'GET', url:'/resources/healthCareProfessionals.json'})
              .then(function(response){
                  deferred.resolve(response.data);
              },function(response){
                  deferred.reject(response.data);
              });
          return deferred.promise;
      };

      this.getDoctorDetails = function () {
          var deferred = new $q.defer();
          /** Using temporary JSON files to mock the data */
          $http({method:'GET', url:'/resources/doctorDetails.json'})
              .then(function(response){
                  deferred.resolve(response.data);
              },function(response){
                  deferred.reject(response.data);
              });
          return deferred.promise;
      };

      this.getGoalsForOwner = function (ownerId) {
          return $http.get('/api/goalsForOwner/' + ownerId);
      };
      /**
       * @name submitAppointment
       * @desc Method to store the appointment.
       * @param {Object} payload - information of the requested appointment
       * @returns {Object} promise.
       */
      this.submitAppointment = function(payload) {
        var deferred = new $q.defer();
        if (!payload) {
          throw new Error('payload is invalid');
        }
        /** Using temporary JSON files to mock the data */
        $http({
          method: 'POST',
          url: constant.baseUrl + constant.insert,
          data: angular.toJson(payload)
        }).then(function (response) {
          deferred.resolve(response.data);
        }, function (error) {
          deferred.reject(error.data);
        });
        return deferred.promise;
      }
    }

})();
