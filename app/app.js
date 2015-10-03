exampleApp = angular.module('exampleApp', ['ngResource', 'ngRoute', 'ngCookies']).run(function ($rootScope, $location, authService) {
	$rootScope.$on('$routeChangeStart', function (event, next) {
		var accessDenied = true;
		
		var roles = next.roles;
		if (!roles) {
			console.log('no roles defined');
			// if no roles defined, let anyone on
			accessDenied = false;
		}

		// compare required role, to users role
		for(var role in roles){
			if(authService.isInRole(roles[role])){
				accessDenied = false;
			}
		}

		// if access is denied, redirect to login
		if(accessDenied){   
			$location.path('/login');       
		}
	});
});

