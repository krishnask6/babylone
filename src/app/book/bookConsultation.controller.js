(function () {
    'use strict';

        angular
        .module('babylone')
        .controller('BookConsultationController', BookConsultationController);

        /** @ngInject */
        function BookConsultationController($timeout, $log, consultationService, $uibModal) {
            var vm = this;

            /** Service to get the patients/user & releative list & details*/
            consultationService.getPatients().then(function (data){
                vm.patients = data;
            });

            /** Service to get the professional health care list & details*/
            consultationService.gethealthCareProfession().then(function (data){
                vm.healthCareProfessionals = data;
            });

            /** Service to get the professional health care list & details*/
            consultationService.getDoctorDetails().then(function (data){
                vm.doctors = data;
            });

            vm.items = ['item1', 'item2', 'item3'];
            vm.open = open;
            vm.updateSelection = updateSelection;
            vm.appointment = {};
            init();

            function init(){
                // initialise something here
            }

            /** Using ui-bootstrap modal
             *  {string} size size of the modal window
            */
            function open(size) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'modal.html',
                    controller: 'ModalController',
                    controllerAs: 'vm',
                    windowClass : 'show',
                    size: size,
                    resolve: {
                        items: function () {
                            return vm.items;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    vm.selected = selectedItem;
                    vm.appointment.doctor = selectedItem.id;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            }

            /**
             *  updateSelection - updates the check status of the item selected
             *  and thus unselects rest of the item
             *  @param {int} position position of the item selected
             *  @param {Array} items list of items in the checkbox list
            */
            function updateSelection(position, items) {
                angular.forEach(items, function (item, index) {
                    if (position !== index) {
                        item.selected = false;
                    } else {
                        vm.appointment.patient = item.id;
                        vm.appointment.healthCareProfessional = item.id;
                    }
                });
            }

            /**
             * bookAppointment - method to book an appointment
             * @desc method to call the service for booking an appointment with the doctor
             * with the information provided
            */
            function bookAppointment() {
                try {
                    consultationService.submitAppointment(vm.appointment).then(function (response) {
                        if(response.error){
                            vm.msg = response.error;
                        }else{
                            vm.msg = response;
                        }
                    }, function (error) {
                        $log.log('error' + error);
                    });
                } catch (error) {
                    $log.error('Error in fetching appointment data:' + error);
                }
            }
        }
})();
