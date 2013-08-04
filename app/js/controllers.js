'use strict';

/* Controllers */

angular
    .module(
        'helloWorldNGApp.controllers',
        []
    )
    .controller(
        'twitterCtrl',
        [
            '$scope',
            function($scope) {
                $scope.loadMoreTweets = function () {
                    alert("Loading tweet from internetz")
                }
                $scope.deleteTweets = function () {
                    alert("Deleting tweets")
                }
            }
        ]
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
        'homeCtrl0',
        [
            '$scope', 'Data',
            function($scope, Data) {
                $scope.data = Data
                // if($scope.data)
                //     if($scope.data.message)
                //         console.log("existe y es" + $scope.data.message)
            }
        ]
    )
    .controller(
        'homeCtrlMoS',
        [
            '$scope', 'ManOfSteel',
            function($scope, ManOfSteel) {
                $scope.ManOfSteel = ManOfSteel
                // if($scope.data)
                //     if($scope.data.message)
                //         console.log("existe y es" + $scope.data.message)
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