exampeApp.directive('restrict', function(authService){
  return{
    restrict: 'A',
    priority: 100000,
    scope: false,
    link: function() {
      //
    },
    compile:  function(element, attr, linker){
      var accessDenied = true;
      var user = authService.getUser();

      var attributes = attr.access.split(" ");
      for(var i in attributes){
        if(authService.isInRole(attributes[i]){
          accessDenied = false;
        }
      }

      if(accessDenied){
        element.children().remove();
        element.remove();           
      }
    }
  }
});