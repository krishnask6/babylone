(function () {
    'use strict';

        angular
        .module('babylone')
        .controller('BookConsultationController', BookConsultationController);

        /** @ngInject */
        function BookConsultationController($timeout, consultationService, $uibModal, $log) {
            var vm = this;

            /** Service to get the patients/user & releative list & details*/
            consultationService.getPatients().then(function (data){
                vm.patients = data;
                vm.patients[0].selected = true;
            });

            /** Service to get the professional health care list & details*/
            consultationService.gethealthCareProfession().then(function (data){
                vm.healthCareProfessionals = data;
                vm.healthCareProfessionals[0].selected = true;
            });

            /** Service to get the professional health care list & details*/
            consultationService.getDoctorDetails().then(function (data){
                vm.doctors = data;
                vm.selectedDoctor = vm.doctors[0];
                vm.appointments = vm.selectedDoctor.appointments[0];
            });

            vm.items = ['item1', 'item2', 'item3'];
            vm.open = open;
            vm.updateSelection = updateSelection;
            vm.bookAppointment = bookAppointment;
            vm.appointment = {};
            vm.disableSubmitButton = disableSubmitButton;
            vm.appointmentsSelection = appointmentsSelection;
            init();

            function init(){
                // initialise something here
                vm.appointment = {};
            }

            function appointmentsSelection () {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'modal.html',
                    controller: 'ModalController as vm',
                    windowClass : 'show',
                    size: size,
                    resolve: {
                        items: function () {
                            return vm.selectedDoctor.appointments;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    vm.appointment.appointment = selectedItem.id;
                    vm.appointments = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            }

            /** Using ui-bootstrap modal
             *  {string} size size of the modal window
            */
            function open(size) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'modal.html',
                    controller: 'ModalController as vm',
                    windowClass : 'show',
                    size: size,
                    resolve: {
                        items: function () {
                            return vm.doctors;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    vm.appointment.doctor = selectedItem.id;
                    vm.selectedDoctor = selectedItem;
                    vm.appointments = vm.selectedDoctor.appointments[0];
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
            function updateSelection(position, items, type) {
                var selectedId;
                angular.forEach(items, function (item, index) {
                    if (position !== index) {
                        item.selected = false;
                    } else {
                        selectedId = item.id;
                    }
                });
                vm.appointment[type] = selectedId;
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
                alert("Your appointment is fixed");
                //@todo Reset the values
            }

            /**
             * disableSubmitButton - disable submit button if none of the items are filled
             */
            function disableSubmitButton() {
                return !(vm.appointment && (vm.appointment.patient.length > 0 && vm.appointment.professional.length > 0));
            }
        }
})();
