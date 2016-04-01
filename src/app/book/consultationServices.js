(function() {
    'use strict';

    angular
        .module('babylone')
        .service('consultationService', consultationService);

    /** @ngInject */
    function consultationService($http, $q) {
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
    }
})();
