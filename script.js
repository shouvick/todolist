var app = angular.module('mod',[]);

app.controller('ctr',function($scope) {
	$scope.a = "a";
	$scope.items = [];

	$scope.new = "";

	$scope.addItem = function(){
		$scope.items.push($scope.new);
		$scope.new = "";
	}

	$scope.delete = function($index)
	{
		$scope.items.pop();
	}
});