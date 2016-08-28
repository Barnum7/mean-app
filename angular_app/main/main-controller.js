angular.module('myApp').controller('MainController', MainController);

function MainController( $http ) {
  var vm = this;

  $http.get( 'http://localhost:3000/api/locations' ).then( function( response ) {
    vm.locations = response.data
  });

  vm.name = 'Brian';
}
