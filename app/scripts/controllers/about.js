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
            var currentitem = $routeParams.itemId;
            var geturl = 'https://api.backendless.com/v1/data/items?where=linkid%20%3D%20%27' + currentitem + '%27';
            var req = {
             method: 'GET',
             url: geturl,
             headers: {
               'application-Id': "31877D2E-F358-A666-FF42-B6EF6705A800",
               'secret-key': "2C7C2056-6BFF-46B7-FFB8-EA1309821000"
             }
            };
            $http(req).success(function (data) {
             $scope.singleitem = data.data[0];
            });





            var api = 'B495C09D-FD46-8BB8-E71A-457FF952CEB8';
            var url = '';

            $scope.send = function (usertel) {
                $scope.url = 'http://sms.ru/sms/send?api_id=' + $scope.api + '&to=' + usertel + '&text=' + $scope.item.sms;
                console.log($scope.url);
                $http.get($scope.url).success(function () {

                });
            };
  }]);
