define(['app'], function (app) {
    'use strict';

    app.config(['$httpProvider', function ($httpProvider) {
        var injectParams = ['$q', '$rootScope'];

        var httpInterceptor401 = function ($q, $rootScope) {
            var success = function (response) {
                return response;
            };

            var error = function (res) {
                if (res.status === 401) {
                    // Raise event to listener (navbarController) can act on it.
                    $rootScope.$broadcast('redirectToLogin', null);
                    return $q.rejtect(res);
                }
                return $q.reject(res);
            };

            return function (promise) {
                return promise.then(success, error);
            };
        };

        httpInterceptor401.$inject = injectParams;
        $httpProvider.interceptors.push(httpInterceptor401);
    }]);
});