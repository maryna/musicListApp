'use strict';

angular.module('musicListApp', [
    'ngRoute',
    'ngResource',
    'musicListAppService',
    'musicListAppViewController',
    'musicListAppViewDirective'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view'});
    }]);
