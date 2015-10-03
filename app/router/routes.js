exampleApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController',
        roles: ['user']
        
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'

    }).otherwise({
        redirectTo: '/'
    });
});