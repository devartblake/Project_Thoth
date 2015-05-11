(function () {
    var injectParams = ['$location', '$timeout'];

    var typeahead = function ($location, $timeout) {
        var vm = this;

    }

    typeahead.$inject = injectParams;

    angular.module('directive').directive('typeahead', typeahead);
})