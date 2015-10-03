exampleApp.controller("mainController", function ($scope) {
	$scope.message = "Hello";
});

exampleApp.controller("loginController", function ($scope, $location, authService) {
	$scope.login = function () {
		console.log('loginController');
		$scope.dataLoading = true;

		authService.login($scope.email, $scope.password, function(response) {
			if(response.success) {
				console.log('login successful');
				$location.path('/');

			} else {
				console.log('login unsuccessful');
				$scope.error = "Incorrect email or password, please try again!";
				$scope.dataLoading = false;
			}
		});
	};
});