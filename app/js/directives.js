'use strict';

/* Directives */


angular
    .module(
        'helloWorldNGApp.directives',
        []
    )
    .directive(
        'enter',
        [
            function() {
                return function (scope, element, attrs) {
                    element.bind("mouseenter", function() {
                        // scope.loadMoreTweets()
                        angular.element(element).css({
                            "font-size": "2em",
                            "background-color": "yellow"
                        })
                        scope.$apply(attrs.enter)
                    })
                }
            }
        ]
    )
    .directive(
        'appVersion',
        [
            'version',
            function(version) {
                return function(scope, elm, attrs) {
                    elm.text(version);
                };
            }
        ]
    )
    .directive('superhero', function() {
        return {
            restrict: "E",
            scope: {},
            controller: function ($scope) {
                $scope.abilities = []

                this.addStrength = function() {
                    $scope.abilities.push("strength")
                }
                this.addSpeed = function() {
                    $scope.abilities.push("speed")
                }
                this.addFlight = function() {
                    $scope.abilities.push("flight")
                }
            },
            link: function(scope, element) {
                element.addClass("button")
                element.bind("mouseenter", function(){
                    console.log(scope.abilities)
                })
            }
        }
    })
    .directive('strength',function(){
        return {
            require: 'superhero',
            link: function (scope, element, attrs, superheroCtrl) {
                superheroCtrl.addStrength()
            }
        }
    })
    .directive('speed',function(){
        return {
            require: 'superhero',
            link: function (scope, element, attrs, superheroCtrl) {
                superheroCtrl.addSpeed()
            }
        }
    })
    .directive('flight',function(){
        return {
            require: 'superhero',
            link: function (scope, element, attrs, superheroCtrl) {
                superheroCtrl.addFlight()
            }
        }
    })
    // Register the 'myCurrentTime' directive factory method.
    // We inject $timeout and dateFilter service since the factory method is DI.
    .directive(
        'myCurrentTime',
        function($timeout, dateFilter) {
            // return the directive link function. (compile function not needed)
            return function(scope, element, attrs) {
                var format, // date format
                timeoutId; // timeoutId, so that we can cancel the time updates

                // used to update the UI
                function updateTime() {
                    element.text(dateFilter(new Date(), format));
                }

                // watch the expression, and update the UI on change.
                scope.$watch(attrs.myCurrentTime, function(value) {
                    format = value;
                    updateTime();
                });

                // schedule update in one second
                function updateLater() {
                    // save the timeoutId for canceling
                    timeoutId = $timeout(function() {
                        updateTime(); // update DOM
                        updateLater(); // schedule another update
                    }, 1000);
                }

                // listen on DOM destroy (removal) event, and cancel the next UI update
                // to prevent updating time after the DOM element was removed.
                element.bind('$destroy', function() {
                    $timeout.cancel(timeoutId);
                });

                updateLater(); // kick off the UI update process.
            }
        }
    );
