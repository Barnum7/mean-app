var mongoose = require( 'mongoose' );
var Location = mongoose.model( 'Location' );

module.exports.locationsGetAll = function( req, res ){
  console.log("GET all Haven locations");

  Location
    .find()
    .exec( function( err, locations ) {
      if( err ) {
        console.log( "Error finding the hotels" );

        res
          .status( 500 )
          .json( { message: err } );
      };

      res
        .status( 200 )
        .json( locations );
    });

};

module.exports.locationsGetOne = function( req, res ){

  console.log( "GET a particular location's data" );
  var locationId = req.params.locationId;

  Location
    .findById( locationId )
    .exec( function( err, location ) {
      if( err ) {
        console.log( err );

        res
          .status( 500 )
          .json( {  message: err } );
      } else if( !location ) {
        res
          .status( 404 )
          .json( {"message" : "Location not found" } );
      };

      res
        .status( 200 )
        .json( location );
    });
};

// Keeping this here to make adding an array of photos and ammenities super easy

var _splitArray = function( input ) {
  var output;
  if( input && input.length > 0 ) {
    output = input.split(",");
  } else {
    output = [];
  }
  return output;
}
module.exports.locationCreate = function( req, res ) {
  console.log( "Create a new Haven location" );

  Location
    .create({
      "ammenities" : req.body.ammenities,
      "neighborhood" : req.body.neighborhood,
      "name" : req.body.name,
      "address" : req.body.address,
      "description" : req.body.description,
      "city" : req.body.city,
      "photos" : req.body.photos
    }, function( err, location ) {
      if( err ) {
        console.log( "Error creating Haven Location" );

        res
          .status( 400 )
          .json( err )
      } else {
        console.log( "Haven location created", location );

        res
          .status( 201 )
          .json( location );
      };
    });
}

module.exports.locationsUpdateOne = function( req, res ) {
  console.log( "Update a Haven location" );

  var locationId = req.params.locationId;

  Location
    .findById( locationId )
    .exec( function( err, doc ) {
      var response = {
        status : 200,
        message : doc
      };
      if( err ) {
        console.log( "Error finding location" );
        response.status = 500
        response.message = err;
      } else if( !doc ) {
        response.status = 404
        response.message = {
          "message" : "Location not found" }
      };

      if ( response.status !== 200 ) {
        res
          .status( response.status )
          .json( response.message )
      } else {
        doc.ammenities = req.body.ammenities,
        doc.neighborhood = req.body.neighborhood,
        doc.name = req.body.name,
        doc.address = req.body.address,
        doc.description = req.body.description,
        doc.city = req.body.city,
        doc.photos = req.body.photos
      }

      doc.save( function( err, locationUpdated) {
        if( err ) {
          res
            .status( 500 )
            .json( err );
        } else {
          res
            .status( 204 )
            .json();
        }
      });
    });
}

module.exports.locationsDeleteOne = function( req, res ) {
  console.log( "Delete a haven location" );
  var locationId = req.params.locationId;

  Location
    .findByIdAndRemove( locationId )
    .exec( function( err, location ) {
      if ( err ) {
        res
          .status( 404 )
          .json( err );
      } else {
        console.log("Haven location successfully deleted");
          res
            .status( 204 )
            .json();
      };
    });
}
