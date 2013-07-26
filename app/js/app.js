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
                    '/',
                    {
                        templateUrl: 'partials/home.html'
                    }
                )
                $routeProvider.when(
                    '/clock-ticker',
                    {
                        templateUrl: 'partials/clock_ticker.html',
                        controller: 'clockTickCtrl'
                    }
                )
                $routeProvider.when(
                    '/filterInput',
                    {
                        templateUrl: 'partials/filterInput.html',
                        controller: 'filterCtrl'
                    }
                );
                $routeProvider.when(
                    '/invoice',
                    {
                        templateUrl: 'partials/invoice.html',
                        controller: 'InvoiceCtrl'
                    }
                );
                $routeProvider.when(
                    '/login',
                    {
                        templateUrl: 'partials/services/login.html',
                        controller: 'loginCtrl'
                    }
                );
                $routeProvider.when(
                    '/article/register',
                    {
                        templateUrl: 'partials/article_register.html',
                        controller: 'articleRegister'
                    }
                );
                $routeProvider.when(
                    '/article/list',
                    {
                        templateUrl: 'partials/article_list.html',
                        controller: 'articleRegister'
                    }
                );
                $routeProvider.otherwise({redirectTo: '/'});
            }
        ]
    );