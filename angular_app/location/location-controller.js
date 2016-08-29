angular.module('myApp').controller('LocationController',
LocationController);

function LocationController( LocationFactory, $routeParams ) {
  var vm = this;
  var id = $routeParams.id;

  LocationFactory.getOneLocation(id).then(function(response) {
    return vm.location = response;
  })

}
