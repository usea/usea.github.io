var useaApp = angular.module('useaApp',['ngRoute']);

useaApp.controller('RouteListCtl',function($scope) {
});
useaApp.controller('RouteDetailCtl',function($scope, $routeParams) {
    $scope.id = $routeParams.id;
});

useaApp.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/partials/index.html',
            controller: 'RouteListCtl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);  