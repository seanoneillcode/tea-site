'use strict';

angular.module('myApp')
    .directive('picker', function () {
        function link(scope, element, attrs) {
            console.log("attrs", attrs);
            scope.product = attrs.product;
        }
        return {
            link: link,
            restrict: 'E',
            templateUrl: 'components/picker/picker.html',
            controller: 'PickerCtrl'
        };
    });
