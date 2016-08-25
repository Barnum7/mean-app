var locationData = require( '../data/location-data.json' );

module.exports.locationsGetAll = function( req, res ){
  console.log( 'GET location data' );
  res
    .status( 200 )
    .json( locationData );
}

module.exports.locationsGetOne = function( req, res ){
  console.log( "GET a particular location's data" );
  var locationId = req.params.locationId - 1;
  var thisLocation = locationData[locationId];
  res
    .status( 200 )
    .json( thisLocation );
}

module.exports.locationCreate = function( req, res ) {
  console.log( "Create a new Haven location" );
  console.log( req.body );

  res
    .status( 200 )
    .json( req.body )
}
