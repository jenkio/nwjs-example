exampleApp.service('authService', function($rootScope, $cookieStore, $timeout) {
  return {
    login: function (email, password, callback) {
      /* Dummy authentication for testing, uses $timeout to simulate api call */
      $timeout(function(){
        var response = {};
        response.success = false;

        if(email === 'test@test.com' && password === 'test'){
          console.log('login details correct');
          response.success = true;
          response.email = 'test@test.com';
          response.role = 'user';
        }

        if(response.success) {
          // set globals
          $rootScope.globals = {
            user: {
              email: response.email,
              role: response.role
            }
          };

          // set cookie
          $cookieStore.put('globals', $rootScope.globals);
        }
        callback(response);
      }, 200);
    },

    clearCredentials: function () {
      $rootScope.globals = {};
      $cookieStore.remove('globals');
    },

    getUser: function(){
      var user = {};
      // default
      user.email = '',
      user.role = 'guest'

      // get saved credentials
      var credentials = $cookieStore.get('globals');
      // if nothing saved return default, else get the saved details
      console.log(credentials);
      if(credentials) {
        user = credentials.user;
      }
      return user;
    },

    isInRole: function(requiredRole) { 
      var authUser = this.getUser();
      console.log('user role: ' + authUser.role);
      console.log('required role: ' + requiredRole);
      return (authUser.role === requiredRole);
    }
  }
});

