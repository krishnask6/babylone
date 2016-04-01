(function() {
    'use strict';

    angular
        .module('babylone')
        .controller('ModalController', ModalController);

        /** @ngInject */
    function ModalController($uibModalInstance, items) {
        var vm = this;

        vm.items = items;
        vm.ok = ok;
        vm.cancel = cancel;

        vm.selected = selected;
        function selected (item) {
            item: vm.items[0];
            $uibModalInstance.close(item);
        }

        function ok() {
            $uibModalInstance.close(vm.selected.item);
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
