(function () {
    'use strict';
    /**
     * Creating the ng-app module
     */
    angular
        .module('project',['ui.router']);
    /**
     * Configuring states using ui-router
     */
    angular.module('project')
        .config(StatesConfig);

    StatesConfig.$inject = ['$stateProvider'];
    function StatesConfig($stateProvider) {
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'

        };
        var aboutState = {
            name: 'aggregations',
            url: '/aggregations/:id',
            templateUrl: 'app/views/aggs.html',
            controller: 'AggsController',
            controllerAs: 'vm',
            params: { id : '1' }
        };

        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);
    }
})();