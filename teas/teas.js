'use strict';

angular.module('myApp.teas', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/teas', {
        templateUrl: 'teas/teas.html',
        controller: 'TeasCtrl'
    });
}])

.controller('TeasCtrl', [function() {

}]);
