define([
    'app'
], function (app) {
    'use strict';

    var injectParams = ['$scope', '$location', '$routeParams'];

    var SearchController = function ($scope, $location, $routeParams) {
        var vm = this;

        $scope.selectedNumber = null;

        // Instantiate the bloodhound suggestion engine
        var numbers = new Bloodhound({
            datumTokenizer: function (d) { return Bloodhound.tokenizers.whitespace(d.num); },
            queryTokenizer: Bloodhound.tokenizer.whitespace,
            local: [
                { num: 'one' },
                { num: 'two' },
                { num: 'three' }
            ]
        });

        numbers.initialize();

        $scope.numberDataset = {
            displayKey: 'num',
            source: numbers.ttAdapter()
        };
    };

    SearchController.$inject = injectParams;

    app.controller('SearchController', SearchController);
});