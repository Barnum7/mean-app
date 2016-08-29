angular.module('myApp').factory('LocationFactory', LocationFactory);

function LocationFactory($http) {
  return {
    getAllLocations: getAllLocations,
    getOneLocation: getOneLocation
  }

  function getAllLocations() {
    return $http.get('http://localhost:3000/api/locations').then(complete).catch(failed);
  }

  function getOneLocation(id){
    return $http.get('http://localhost:3000/api/locations/' + id).then(complete).catch(failed);
  }

  function complete(response) {
    return response.data;
  }

  function failed(error){
    return error.statusText;
  }

}
