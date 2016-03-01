'use strict';

angular.module('myApp.hackney', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/hackney', {
        templateUrl: 'hackney/hackney.html',
        controller: 'HackneyCtrl'
    });
}])

.controller('HackneyCtrl', [function() {

}]);
