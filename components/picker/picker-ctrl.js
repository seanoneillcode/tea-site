'use strict';

angular.module('myApp')
    .controller('PickerCtrl', function ($scope) {
        console.log("picker");
        $scope.addItem = function() {
            console.log("addItem, type is " + $scope.product);
        };
        $scope.buyItem = function() {
            console.log("buyItem, type is " + $scope.product);
        };
    });
