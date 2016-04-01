console.log('loading app.js');
// Let's create our angular module

// had to comment out ngRoute to make the plain arrays load
// var BSModule = angular.module('app', ['ngRoute']);
var BSModule = angular.module('app', []);

console.log('BSModule = ', BSModule);
// the .controller() method adds a controller to the module
// BSModule.config(function($routeProvider){
//     $routeProvider
//     .when('/', {
//         templateUrl: '/partials/board.html'
//     })
//     // .when('/customers', {
//     //     templateUrl: '/partials/customers.html'
//     // })
//     .otherwise({
//         redirectTo: '/'
//     });
// });
