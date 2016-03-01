'use strict';

angular.module('myApp.dandy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dandy', {
        templateUrl: 'dandy/dandy.html',
        controller: 'DandyCtrl'
    });
}])

.controller('DandyCtrl', [function() {

}]);
