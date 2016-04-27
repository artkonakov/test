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
             console.log($scope.singleitem);
            });

            var BaseApi = '9wOOKBRgUCDFZpxybsmJ3s6E5z5a';
            var BaseUrl = 'https://gate.smsaero.ru/send/?user=';
            var login = 'artkonakov@gmail.com';

            $scope.usertel = '';
            $scope.formsended = false;
            $scope.statusMsg = 'Купон отправлен';
            $scope.submitForm = function (usertel) {

              if ($scope.userForm.$valid) {
                $scope.url = BaseUrl + login + '&password=' + BaseApi + '&to=8' + $scope.usertel + '&text=' +$scope.singleitem.sms+ '&from=news&type=2&answer=json';

              // Проверяем localStorage и сохраняем количество отправленных купонов
              if (!localStorage.getItem(currentitem)) {
                localStorage.setItem(currentitem, 1);
                $http.get($scope.url).success(function (data) {
                console.log(data);
                $scope.formsended = true;
                });
              } else if (parseInt(localStorage.getItem(currentitem)) >= 5) {
                $scope.statusMsg = 'Вы пытаетесь получить слишком много купонов';

              } else {
                var value = localStorage.getItem(currentitem);
                var counting = parseInt(value) + 1;

                localStorage.setItem(currentitem, counting);
                $http.get($scope.url).success(function (data) {
                console.log(data);
                $scope.formsended = true;
                });

              };





                var req2 = {
                   method: 'POST',
                   url: 'https://api.backendless.com/v1/data/phones',
                   headers: {
                     'application-Id': "31877D2E-F358-A666-FF42-B6EF6705A800",
                     'secret-key': "2C7C2056-6BFF-46B7-FFB8-EA1309821000"
                   },
                   data: { tel: $scope.usertel,
                           context: $routeParams.itemId
                    }
                };

                 $http(req2).success(function (data) {
                   console.log(data);


                 });
                  console.log($scope.url);
            };
              $scope.formsended = true;
          };
  }]);
