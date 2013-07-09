'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular
    .module(
        'helloWorldNGApp.services',
        []
    )
    .value('version', '0.1');



angular
    .module('timeExampleModule', [])
    // Declare new object called time,
    // which will be available for injection
    .factory('time', function($timeout) {
        var time = {};

        (function tick() {
        time.now = new Date().toString();
        $timeout(tick, 1000);
        })();
        return time;
    });