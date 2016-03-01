'use strict';

angular.module('myApp.buddha', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/buddha', {
        templateUrl: 'buddha/buddha.html',
        controller: 'BuddhaCtrl'
    });
}])

.controller('BuddhaCtrl', [function() {

}]);
