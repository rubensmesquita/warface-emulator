'use strict';

angular.module('Store', [])

.controller('store', ['$http', '$interval', '$scope', 'API', function ($http, $interval, $scope, API) {

	$scope.shop = {};

	$http.post(API+'shop/items').then(function(e){
		$scope.shopItems = e.data;
		console.log(e.data);
	});

	$scope.removeItem = function(id, i){
		$http.post(API+'shop/remove/item', {id: id}).then(function(e){
			$scope.shopItems.splice(i, 1);
		});
	}

	$scope.savedata = function(){
		$http.post(API+'shop/add/item', {form: $scope.form}).then(function(e){
			$("#mod-primary").modal('toggle');
			$http.post(API+'shop/items').then(function(e){
				$scope.shopItems = e.data;
			});
		});
	}

}]);