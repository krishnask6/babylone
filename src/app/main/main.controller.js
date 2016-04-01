(function() {
    'use strict';

    angular
        .module('babylone')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {
        var vm = this;
        vm.bookDoctor = bookDoctor;

        /** action method for booking a consultation*/
        function bookDoctor() {

        }
    }
})();
