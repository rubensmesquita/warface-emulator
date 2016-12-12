'use strict';

angular.module('warface', [
	'ngRoute',
    'Dashboard',
    'Store'
])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
    .when('/', {
        controller: 'dashboard',
        templateUrl: 'modules/dashboard/views/index.html'
    })

    .when('/store', {
        controller: 'store',
        templateUrl: 'modules/store/views/index.html'
    })

    .otherwise({ redirectTo: '/' });

}])

.constant("API", "http://localhost:9055/api/")

.run(['$rootScope', '$location', '$http', function ($rootScope, $location, $http) {
	$rootScope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };
}]);