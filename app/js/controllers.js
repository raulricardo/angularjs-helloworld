'use strict';

/* Controllers */

angular
    .module(
        'helloWorldNGApp.controllers',
        []
    )
    .controller(
        'articleRegister',
        [
            '$scope',
            function($scope) {
                $scope.master = []
                $scope.articles = []

                $scope.update = function(article) {
                    $scope.master.push(angular.copy(article))
                    // angular.copy(article, $scope.master)
                }
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
    )
    .controller(
        'clockTickCtrl',
        [
            '$scope',
            function($scope){
                $scope.format = 'M/d/yy h:mm:ss a';
            }
        ]
    )
    .controller(
        'filterCtrl',
        [
            '$scope',
            function($scope) {

            }
        ]
    )
    .controller(
        'InvoiceCtrl',
        [
            '$scope',
            function($scope) {
                $scope.qty = 1
                $scope.cost = 19.95
                $scope.discount = false
            }
        ]
    )
    .controller(
        'loginCtrl',
        [
            function(){
            }
        ]
    );