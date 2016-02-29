app.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService) {
	$scope.quotes = dataService.getData();
	$scope.quote={};
	$scope.addQuote = function() {
		dataService.addData($scope.quote);
		$scope.quote = {};
	}
	$scope.removeQuote = function(quoteIndex) {
		dataService.removeData(quoteIndex);
	}
}]);