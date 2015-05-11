define(['angular'], function ( angular, config, routeResolver) {
    'use strict';

    var app = angular.module('app', [
    'ngAnimate',
    'ngStorage',
    'ngSanitize',
    'ui.router',
    'ui.router.util',
    'ui.bootstrap',
    'ui.calendar']);

    app.config(['$stateProvider', '$locationProvider', '$controllerProvider',
        '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
        function ($stateProvider, $locationProvider, $controllerProvider,
            $compileProvider, $filterProvider, $provide, $httpProvider)
        {
            // Change default views and controllers directory using the following:
            // routeResolveProvider.routeConfig.setBaseDirectories('/app/views', '/app/controllers');
                    
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            

            // Define routes = controllers will be loaded dynamically
            $locationProvider.hashPrefix('!').html5mode(true);

            $stateProvider.otherwise('home');
            
            $stateProvider
            //route.resolve() now accepts the convention to use (name of controller & view) as well as the
            //path where the controller or view lives in the controllers or views folder if it's in a sub folder.
            //For example, the controllers for customers live in controllers/customers and the views are in views/customers.
            //The controllers for orders live in controllers/orders and the views are in views/orders
            //The second parameter allows for putting related controllers/views into subfolders to better organize large projects
            //Thanks to Ton Yeung for the idea and contribution.
            .state('home', route.resolve('Home', 'home/home', 'vm'))
            .state('about', { url: '/about', templateUrl: '/views/shared/lookout' })
            .state('/search/:query', route.resolve('Search', 'search', 'vm'))
            .state('/search/article:id', route.resolve('Article', 'article/', 'vm', true))
            .state('/login', route.resolve('Login', '/views/shared/_loginPartial', 'vm'));
        }]);

    app.run(['$rootScope', '$location', '$routeParams', '$window', 'authService',
       function ($rootScope, $location, $routeParams, $window, authService) {
           // Client-side security. Server-side framework MUST add it's
           // own security as well since client-based security is easily hacked
           $rootScope.$on("$routeChangeStart", function (event, next, current) {
               if (next && next.$$route && next.$$route.secure) {
                   if (!authService.user.isAuthenticated) {
                       $rootScope.$evalAsync(function () {
                           authService.redirectToLogin();
                       });
                   }
               }
           });
           $rootScope.$on("$routeChangeSuccess", function (event, next, current) {
               var output = $location.path() + "?";
               angular.forEach($routeParams, function (value, key) {
                   output += key + "=" + value + "&";
               });
               output = output.substr(0, output.length - 1);
               $window._gaq.push(['_trackPageView', output]);

               // Timeout for menu collapse
               setTimeout(function () {
                   if ($rootScope.isCollapsed === true) {
                       set95PercentWidth();
                   }
               }, 1000);
           });
       }]);

    app.controller('ga', function ($scope, $window, $location) {
        var vm = this;
        vm.$on('$viewContentLoaded', function (event) {
            $window._gaq.push(['_trackPageView', $location.path()]);
        });
    });

    return app;
});