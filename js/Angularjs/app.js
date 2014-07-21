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
        .when('/index', {
            templateUrl: 'pages/partials/index.html',
            controller: 'RouteListCtl'
        })
        .when('/widgets', {
            templateUrl: 'pages/widgets.html',
            controller: 'RouteListCtl'
        })
        .when('/charts/morris', {
            templateUrl: 'pages/charts/morris.html',
            controller: 'RouteListCtl'
        })
        .when('/charts/flot', {
            templateUrl: 'pages/charts/flot.html',
            controller: 'RouteListCtl'
        })
        .when('/charts/inline', {
            templateUrl: 'pages/charts/inline.html',
            controller: 'RouteListCtl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);  
