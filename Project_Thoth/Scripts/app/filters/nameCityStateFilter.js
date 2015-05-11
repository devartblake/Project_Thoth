define(['app'], function (app) {
    'use strict';

    var nameCityStateFilter = function () {
        return function (users, filterValue) {
            if (!filterValue) return users;

            var matches = [],
            filterValue = filterValue.toLowerCase();
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                if (user.firstName.toLowerCase().indexOf(filterValue) > -1 ||
                    user.lastName.toLowerCase().indexOf(filterValue) > -1 ||
                    user.city.toLowerCase().indexOf(filterValue) > -1 ||
                    user.state.name.toLowerCase().indexOf(filterValue) > -1) {
                    matches.push(user);
                }
            }
            return matches;
        };
    };

    app.filter('nameCityStateFilter', nameCityStateFilter);
});