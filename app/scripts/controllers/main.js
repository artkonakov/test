'use strict';

/**
 * @ngdoc function
 * @name cupon2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cupon2App
 */
angular.module('cupon2App')
  .controller('MainCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
            $scope.items = {};
            var req = {
             method: 'GET',
             url: 'https://api.backendless.com/v1/data/items',
             headers: {
               'application-Id': "31877D2E-F358-A666-FF42-B6EF6705A800",
               'secret-key': "2C7C2056-6BFF-46B7-FFB8-EA1309821000"
             }
           };
           $http(req).success(function (data) {
             console.log(data);
             $scope.items = data.data;
           });

           //Сравнение даты для отображения элементов
           $scope.todayDate = new Date();
           $scope.comparingDate = function (e) {
             if ( parseInt($scope.todayDate.getTime()) <= e ) {
              return true;
            } else {
                return false;
            };
           };




  }]);
