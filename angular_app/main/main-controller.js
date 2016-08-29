angular.module('myApp').controller('MainController', MainController);

function MainController(LocationFactory) {
  var vm = this;

  LocationFactory.getAllLocations().then(function(response) {
    vm.locations = response;
    console.log('vm.locations: ', vm.locations);
  })

  vm.name = 'Brian';
}
