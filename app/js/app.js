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
                $routeProvider.when(
                    '/invoice',
                    {
                        templateUrl: 'partials/invoice.html',
                        controller: 'InvoiceCtrl'
                    }
                );
                $routeProvider.otherwise({redirectTo: '/view1'});
            }
        ]
    );