var myApp = angular.module('Hello',[]);
myApp.controller('HelloController', ['$scope', function($scope){
	$scope.greeting = { text: 'Hello' };
}]);
