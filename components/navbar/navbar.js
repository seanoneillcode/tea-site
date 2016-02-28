'use strict';

angular.module('myApp')
    .directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/navbar/navbar.html',
            controller: 'NavbarCtrl',
        };
    });
