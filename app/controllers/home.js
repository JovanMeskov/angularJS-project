(function () {
    'use strict';
    angular
        .module('project')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http', '$state'];

    /* @ngInject */
    function HomeController($http, $state) {
        var vm = this;

        $http.get('http://localhost:3000/get').then(function (response) {
            vm.results = response.data;
        });

        vm.getUpdateUrl = function (id) {
            return "aggregations({ id:" + id + "})";
        };

        vm.deleteUser = function (id) {
            $http.delete('http://localhost:3000/delete/' + id).then(function (response) {
            });
        };
    }
})();
