'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular
    .module(
        'helloWorldNGApp.services',
        []
    )
    .value('version', '0.1')
    .factory('Data', function(){
        return { message: "No message" }
    })
    .factory(
        'ManOfSteel', function() {
            var ManOfSteel = {}
            ManOfSteel.cast = [
                {
                    name: "Henry Cavill",
                    character: "Clark Kent / Kal-El"
                },
                {
                    name: "Amy Adams    Amy Adams",
                    character: "Lois Lane"
                },
                {
                    name: "Michael Shannon  Michael Shannon",
                    character: "General Zod"
                },
                {
                    name: "Diane Lane   Diane Lane",
                    character: "Martha Kent"
                },
                {
                    name: "Russell Crowe    Russell Crowe",
                    character: "Jor-El"
                },
                {
                    name: "Antje Traue  Antje Traue",
                    character: "Faora-Ul"
                },
                {
                    name: "Harry Lennix     Harry Lennix",
                    character: "General Swanwick"
                },
                {
                    name: "Richard Schiff   Richard Schiff",
                    character: "Dr. Emil Hamilton"
                },
                {
                    name: "Christopher Meloni   Christopher Meloni",
                    character: "Colonel Nathan Hardy"
                },
                {
                    name: "Kevin Costner    Kevin Costner",
                    character: "Jonathan Kent"
                },
                {
                    name: "Ayelet Zurer     Ayelet Zurer",
                    character: "Lara Lor-Van"
                },
                {
                    name: "Laurence Fishburne   Laurence Fishburne",
                    character: "Perry White"
                },
                {
                    name: "Dylan Sprayberry     Dylan Sprayberry",
                    character: "Clark Kent (13 Years)"
                },
                {
                    name: "Cooper Timberline    Cooper Timberline",
                    character: "Clark Kent (9 Years)"
                },
                {
                    name: "Richard Cetrone  Richard Cetrone",
                    character: "Tor-An"
                }
            ]
            return ManOfSteel
        }
    )



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
    })
