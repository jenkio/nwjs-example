exampleApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController',
        roles: ['admin']
        
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController',
        roles: ['guest']

    }).otherwise({
        redirectTo: '/'
    });
});