'use strict';

angular.module('myApp.story', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/story', {
        templateUrl: 'story/story.html',
        controller: 'StoryCtrl'
    });
}])

.controller('StoryCtrl', [function() {

}]);
