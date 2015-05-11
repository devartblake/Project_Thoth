requirejs.config({
    urlArgs: 'v1' + (new Date().getTime()),
    // The default namespace is /
    baseUrl: '/Scripts/',
    waitSeconds: 0, // Make sure that it's enough to load all scripts
    paths: {
        'jquery': 'vendors/jquery/jquery-2.1.3',
        'bootstrap': 'vendors/bootstrap.min',
        'breeze': 'vendor/breeze.min',
        'angular': 'vendors/angular/angular',
        'angulartics': 'vendors/angular/angulartics',
        'angular.animate': 'vendors/angular/angular-animate.min',
        'angular.aria': 'vendors/angular/angular-aria.min',
        'angular.cookies': 'vendors/angular/angular-cookies.min',
        'angular.loader': 'vendors/angular/angular-loader.min',
        'angular.messages': 'vendors/angular/angular-messages.min',
        'angular.storage': 'vendors/ngStorage',
        'angular.resource': 'vendors/angular/angular-resource.min',
        'angular.route': 'vendors/angular/angular-route.min',
        'angular.sanitize': 'vendors/angular/angular-sanitize.min',
        'angular.singalR.hub': 'vendors/angular/angular-signalr-hub',
        'angular.touch': 'vendors/angular/angular-touch.min',
        'angular.uuid': 'vendors/angular/angular-uuid',
        'angular.ui.bootstrap': 'vendors/angular-ui/ui-bootstrap',
        'angular.ui.router': 'vendors/angular/angular-ui-router',
        'angular.ui-tpls': 'vendors/angular-ui/ui-bootstrap-tpls.min',
        'jquery.signalR': 'vendors/jquery/jquery.signalR-2.2.0',
        'jquery.touchSwipe': 'vendors/jquery/jquery.touchSwipe',
        'jquery.ui': 'vendors/jquery-ui/jquery-ui',
        'respond': 'vendors/respond/respond',
        'respond.matchmedia': 'vendors/respond/respond.matchmedia.addListener',
        'domReady': 'vendors/domReady',
        'moment': 'vendors/moment/moment.min',
        'moment.locales': 'vendors/moment/moment-with-locales.min',
        'toastr': 'vendors/toastr',
        'sidebar': 'vendors/sidebar',
        'ui.calendar': 'vendors/calendar',
        // TweenMax components
        'tweenMax': 'vendors/tweenMax/TweenMax.min',
        'tweenLite': 'vendors/tweenMax/TweenLite.min',
        'timelineMax': 'vendors/tweenMax/TimelineMax.min',
        'timelineLite': 'vendors/tweenMax/TimelineLite.min',
        // Masonry components
        'masonry': 'vendors/masonry.pkgd.min',
        'eventEmitter': 'vendors/masonry/EventEmitter',
        'eventie': 'vendors/masonry/eventie',
        'docReady': 'vendors/masonry/doc-ready',
        'getStyle-property': 'vendors/masonry/get-style-property',
        'getSize': 'vendors/masonry/get-size',
        'jqueryBridget': 'vendors/masonry/jquery.bridget',
        'matchesSelector': 'vendors/masonry/matches-selector',
        'utils': 'vendors/masonry/utils',
        'item': 'vendors/masonry/item',
        'outlayer': 'vendors/masonry/outlayer'
    },
    priority: ['angular'],
    shim: {
        'jquery': { exports: '$' },
        'angular': { exports: "angular" },        
        'app': { deps: ['angular', 'angular.ui.router', 'bootstrap'] },
        'angular.animate': { deps: ['angular'] },
        'angular.sanitize': { deps: ['angular'] },
        'bootstrap': { deps: ['jquery'] },
        'angular.ui.router': { deps: ['angular'] },
        'angular.ui.bootstrap': { deps: ['angular', 'jquery', 'angular.ui-tpls.min'] }
    }
});

deps: ['bootstrap'];

// Main app logic
require([
    'jquery',                               // Jquery
    'angular',                              // Angular    
    'bootstrap',                            // Twitter Bootstrap
    'app',                                  // Applicaton configurations
    'jquery.signalR',                       // Signalr
    'app/animations/listAnimations',        // List animation
    //'app/controllers/homeController',     // Home controller
    //'app/controllers/searchController',   // Search Controller
    //'app/controllers/navbarController',   // Navbar Controller
    //'app/filters/nameCityStateFilter',    // City & State filter
    'app/services/cookieService',           // Cookie service
    'app/services/routeResolver',           // Angular Route  resolver service
    'app/services/authService',             // Login authorization service
    'app/services/modalService',            // Modal Service
    //'app/services/httpInterceptors'       // Http interceptoer service
],
    function ($, angular, app) {
        'use strict';
        define(['domReady'], function (domReady) {
            domReady(function () {
                // Bootstrap the angular application
                angular.bootstrap(document, ['app']);
                app.initialize();
            });
        });
    }
);