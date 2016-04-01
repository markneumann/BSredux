console.log('loading app.js');
// Let's create our angular module
var BSModule = angular.module('BS_app', ['ngRoute']);

// the .controller() method adds a controller to the module
BSModule.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/partials/board.html'
    })
    // .when('/customers', {
    //     templateUrl: '/partials/customers.html'
    // })
    .otherwise({
        redirectTo: '/'
    });
});
