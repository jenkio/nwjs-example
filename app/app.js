exampleApp = angular.module('exampleApp', ['ngResource', 'ngRoute']).run(function ($rootScope, $location, authService) {
	$rootScope.$on('$routeChangeStart', function (event, next) {
		var accessDenied = true;
		
		for(var role in next.roles){
			if(authService.isInRole(role)){
				accessDenied = false;
			}
		}

		if(accessDenied){   
			$location.path('/login');       
		}
	});
});

