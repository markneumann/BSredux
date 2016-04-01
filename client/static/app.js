console.log('loading app.js');
// Let's create our angular module

// had to comment out ngRoute to make the plain arrays load
// var BSModule = angular.module('app', ['ngRoute']);
var BSModule = angular.module('app', ['ngRoute']);

.controller('BoardController1', function($scope, $routeParams) {
    $scope.name = "BookController1";
    $scope.params = $routeParams;
})

.controller('BoardController2', function($scope, $routeParams) {
    $scope.name = "BoardController2";
    $scope.params = $routeParams;
})

console.log('BSModule = ', BSModule);
// the .controller() method adds a controller to the module
BSModule.config(function($routeProvider){
    $routeProvider
    .when('/user1', {
        templateUrl: '/partials/left_gameboard.html'
    })
    .when('/user2', {
        templateUrl: 'partials/right_gameboard.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
