'use strict';

/**
 * @ngdoc function
 * @name cupon2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cupon2App
 */
angular.module('cupon2App')
    .controller('AboutCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
            $http.get('/' + $routeParams.itemId + '.json').success(function (data) {
                $scope.item = data;
            });
            $scope.api = 'B495C09D-FD46-8BB8-E71A-457FF952CEB8';
            $scope.url = '';

            $scope.send = function (usertel) {
                $scope.url = 'http://sms.ru/sms/send?api_id=' + $scope.api + '&to=' + usertel + '&text=' + $scope.item.sms;
                console.log($scope.url);
                $http.get($scope.url).success(function () {

                });
            };
  }]);
