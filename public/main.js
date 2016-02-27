angular.module ('ajaxCountriesApp', []);

angular
	.module('ajaxCountriesApp')
	.controller('ajaxCountriesController', ['$scope', '$http', function($scope, $http) {
		
		// Will display data on page load - because it's not set to a function
		// $http.get ('/api/countries')
		// 		.then(function(returnCountries) {
		// 			$scope.getAllCountries = returnCountries.data
		// })


		// Gets list of countries from countriesModel.js from server and app.get('/api/countries' sends back the data. Data is used on Angular side as function argument (ie. (returnCountries))
		$scope.goToCountries = function () {
			$http.get ('/api/countries')
				.then(function(returnCountries) {
					$scope.getAllCountries = returnCountries.data
			})
		}
			
		$scope.findCountry = function () {
			$http.post('/api/countries', {name:$scope.search.name})
			// would return everything submitted in all search fields
			//	$http.post('/api/countries', $scope.search)
			// console.log($scope.search.name)
			// console.log($scope.search)

		}	


		
	}])