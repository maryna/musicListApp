'use strict';

angular.module('musicListAppViewController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view', {
            templateUrl: 'view/view.html',
            controller: 'ViewController'
        });
    }])

    .controller('ViewController', ['$scope', 'RecentMusicList', function ($scope, RecentMusicList) {

        var numberOfSongsOnPage = 10;
        var method = 'user.getrecenttracks';
        var user = 'nastasie_ukr';
        var api_key = 'eebe4fd8702948d93aec6a89fe7fbe49';
        var format = 'json';

        $scope.pageCurrent = 1;
        $scope.songs = [];

        $scope.loadPage = function () {
            RecentMusicList.query({ method: method,
                user: user,
                api_key: api_key,
                format: format,
                limit: numberOfSongsOnPage,
                page: $scope.pageCurrent
            }, function(data) {
                $scope.songs = data.recenttracks.track;
                $scope.pages = data.recenttracks['@attr'].totalPages;
            });

        };

        $scope.nextPage = function () {
            if ($scope.pageCurrent < $scope.pages) {
                $scope.pageCurrent++;
            }
        };

        $scope.previousPage = function () {
            if ($scope.pageCurrent > 1) {
                $scope.pageCurrent--;
            }
        };

        $scope.firstPage = function () {
            $scope.pageCurrent = 1;
        };

        $scope.lastPage = function () {
            $scope.pageCurrent = $scope.pages;
        };


        $scope.range = function () {
            var rangeSize = 5;
            var setOfButtons = [];
            var start;

            start = $scope.pageCurrent;
            if (start > $scope.pages - rangeSize) {
                start = $scope.pages - rangeSize + 1;
            }

            for (var i = start; i < start + rangeSize; i++) {
                setOfButtons.push(i);
            }

            return setOfButtons;
        };

        $scope.disableLeftButtons = function () {
            return $scope.pageCurrent == 1 ? "disabled" : "";
        };

        $scope.disableRightButtons = function () {
            return $scope.pageCurrent == $scope.pages ? "disabled" : "";
        };

        $scope.setPage = function (n) {
            $scope.pageCurrent = n;
        };

        $scope.$watch('pageCurrent', function () {
            $scope.loadPage();
        })
    }]);