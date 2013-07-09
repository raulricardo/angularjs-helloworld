'use strict';

/* Controllers */

angular
    .module(
        'helloWorldNGApp.controllers',
        []
    )
    .controller(
        'MyCtrl1',
        [
            // $scope,
            function(){
                $scope.time = time
                // function ClockCtrl($scope, time) {
                //     $scope.time = time;
                // };
            }
        ]
    )
    .controller(
        'MyCtrl2',
        [
            function() {
            }
        ]
    )
    .controller(
        'listCtrl',
        [
            '$scope',
            function($scope) {
                $scope.features = ['Precio', 'Confiabilidad', 'Garantía']
                $scope.action = function() {
                    $scope.boom += "BOOM!"
                }
                $scope.boom = ""
            }
        ]
    );