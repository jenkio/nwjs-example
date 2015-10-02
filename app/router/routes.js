exampleApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    }).otherwise({
        redirectTo: '/'
    });
});