angular.module('myApp', ['ngRoute']).config(config);

function config( $routeProvider ) {
  $routeProvider.when( '/', {
    templateUrl: 'main/main.html',
    controller: 'MainController',
    controllerAs: 'vm'
  }).when( '/location/:id', {
    templateUrl: 'location/location.html',
    controller: 'LocationController',
    controllerAs: 'vm'
  }).otherwise({
    redirectTo: '/'
  })
}
