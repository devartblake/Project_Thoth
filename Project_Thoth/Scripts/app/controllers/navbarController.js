define(['app'], function (app) {
    'use strict';
    
    var injectParams = ['$scope', '$location'];

    var NavbarController = function ($scope, $location) {
        var vm = this,
            title = 'My Application';

        vm.isCollapsed = false;
        vm.title = title;

        vm.highlight = function (path) {
            return $location.path().substr(0, path.length) === path;
        };
    };

    NavbarController.$inject = injectParams;

    // Loaded normally since the script is loaded upfront
    // Dynamically loaded controlller use app.register.controller
    app.controller('NavbarController', NavbarController);
});