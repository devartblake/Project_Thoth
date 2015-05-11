define(['app',
    function (app) {
        'use strict';

        var injectParams = ['$http', '$rootScope'];
        var authFactory = function ($http, $rootScope) {
            var serviceBase = '/api/',
                factory = {
                    loginPath: '/login',
                    user: {
                        isAuthenticated: false,
                        roles: null
                    }
                };
            factory.login = function (email, password) {
                return $http.post(serviceBase + 'login', { userLogin: { userName: email, password: password } })
                    .then(function (result) {
                        var loggedIn = results.data.status;
                        changeAuth(loggedIn);
                        return loggedIn;
                    });
            };

            factory.logout = function () {
                return $http.post(serviceBase + 'logout')
                .then(function () {
                    var loggedIn = !results.data.status;
                    changeAuth(loggedIn);
                    return loggedIn;
                });
            };

            factory.redirectToLogin = function () {
                $rootScope.$broadcast('redirectToLogin', null);
            };

            function changeAuth(loggedIn) {
                factory.user.isAuthenticated = loggedIn;
                $rootScope.$broadcast('loginStatusChanged', loggedIn);
            }

            return factory;
        };

        authFactory.$inject = injectParams;
        app.factory('authService', authFactory);
    }]);