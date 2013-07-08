'use strict';


// Declare app level module which depends on filters, and services
angular
    .module(
        'helloWorldNGApp',
        [
            'helloWorldNGApp.filters',
            'helloWorldNGApp.services',
            'helloWorldNGApp.directives',
            'helloWorldNGApp.controllers'
        ]
    )
    .config(
        [
            '$routeProvider',
            function($routeProvider) {
                $routeProvider.when(
                    '/view1',
                    {
                        templateUrl: 'partials/partial0.html',
                        controller: 'MyCtrl1'
                    }
                );
                $routeProvider.when(
                    '/view2',
                    {
                        templateUrl: 'partials/partial1.html',
                        controller: 'MyCtrl2'
                    }
                );
                $routeProvider.otherwise({redirectTo: '/view1'});
            }
        ]
    );

// function InvoiceCntl($scope) {
//     $scope.qty = 1
//     $scope.cost = 19.95
//     $scope.discount = false
// }

// function listCtrl($scope) {
//     $scope.features = ['Precio', 'Confiabilidad', 'Garantia']
//     $scope.action = function() {
//         $scope.boom += "BOOM!"
//     }
//     $scope.boom = ""
// }


// angular
//     .module('timeExampleModule', [])
//     // Declare new object called time,
//     // which will be available for injection
//     .factory('time', function($timeout) {
//         var time = {};

//         (function tick() {
//         time.now = new Date().toString();
//         $timeout(tick, 1000);
//         })();
//         return time;
//     });
// // Notice that you can simply ask for time
// // and it will be provided. No need to look for it.
// function ClockCtrl($scope, time) {
//     $scope.time = time;
// }