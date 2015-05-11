define(['app'], function (app) {
    'use strict'; 

    var homeController = angular.module('homeController', []);
    homeController.$inject = injectParams;
    var injectParams = ['$scope'];
    app.register.controller('homeController', homeController);

        var vm = this;
        var app = {
            name: 'Unknown',
            title: 'Comming Soon...',
            version: '0.0.1-Alpha',
            // Whether to print and alert some log information
            debug: false,

            // In-app constants
            settings: {
                colors: {
                    'white': '#fff',
                    'black': '#000',
                    'gray-light': '#999',
                    'gray-lighter': '#eee',
                    'gray': '#666',
                    'gray-dark': '#343434',
                    'gray-draker': '#222',
                    'gray-semi-light': '#777',
                    'gray-semi-lighter': '#ddd',
                    'brand-primary': '#5d8fc2',
                    'brand-success': '#64bd63',
                    'brand-warning': '#f0b518',
                    'brand-danger': '#dd5826',
                    'brand-info': '#5dc4bf',
                },
                navCollapseTimeout: 2500
            }
        }

});