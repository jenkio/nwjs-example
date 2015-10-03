exampleApp.service('authService', function(){
  var user = {};
  user.role = 'guest';
  return {
    getUser: function(){
      return user;
    },
    getRoleData: function(){
      /* this is resolved before the router loads the view and model */
    },
    isInRole: function(requiredRole) {
      return (user.role === requiredRole);
    }
  }
});