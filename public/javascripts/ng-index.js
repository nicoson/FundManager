angular.module("indexModule", ["ngRoute"])

.controller("homepageCtrl", ["$scope","$http",function($scope, $http){
	// $http.get("resource/terms.json").success(function(data){
	// 	$scope.terms = data;
	});
}])