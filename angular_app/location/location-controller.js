angular.module('myApp').controller('LocationController',
LocationController);

function LocationController( $http, $routeParams ) {
  var vm = this;
  var id = $routeParams.id;

  $http.get( 'http://localhost:3000/api/locations/' + id ).then( function ( response ) {
    vm.location = response.data;
  });

}
