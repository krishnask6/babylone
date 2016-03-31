(function() {
    'use strict';

    angular
        .module('babylone')
        .controller('BookConsultationController', BookConsultationController);

    /** @ngInject */
    function BookConsultationController($timeout, $log, consultationService, $uibModal) {
        var vm = this;

        /** Service to get the patients/user & releative list & details*/
        consultationService.getPatients().then(function(data){
            vm.patients = data;
        });

        /** Service to get the professional health care list & details*/
        consultationService.gethealthCareProfession().then(function(data){
            vm.healthCareProfession = data;
        })

        /** Service to get the professional health care list & details*/
        consultationService.getDoctorDetails().then(function(data){
            vm.doctors = data;
        })

        vm.items = ['item1', 'item2', 'item3'];
        vm.open = open;

        /** Using ui-bootstrap modal*/
        function open(size) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'modal.html',
                controller: 'ModalController',
                size: size,
                resolve: {
                    items: function () {
                        return vm.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                    vm.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
        }
    }
})();
