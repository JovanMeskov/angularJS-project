(function () {
    'use strict';
    angular
        .module('project')
        .controller('AggsController', AggsController);
    AggsController.$inject = ['$http', '$stateParams', '$state'];

    function AggsController($http, $stateParams, $state) {
        let vm = this;
        vm.entryToUpdate;
        if ($stateParams.id !== "1") {
            $http.get('http://localhost:3000/get/' + $stateParams.id).then(function (response) {
                vm.entryToUpdate = response.data[0];
                console.log(vm.entryToUpdate)
            });
        }

        vm.updateUser = function () {
            if($stateParams.id !== "1"){
                let entryToSave = {id: $stateParams.id, name: vm.entryToUpdate.name, number: vm.entryToUpdate.number, email: vm.entryToUpdate.email};
                $http.put('http://localhost:3000/put/', entryToSave).then(function (response) {});
            }
            else {
                let entryToSave = {id: $stateParams.id, name: vm.entryToUpdate.name, number: vm.entryToUpdate.number, email: vm.entryToUpdate.email};
                $http.post('http://localhost:3000/post/', entryToSave).then(function (response) {});
            }
            $state.go('home');
        };
    }
})();
