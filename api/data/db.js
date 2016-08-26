var mongoose = require( 'mongoose' );
var dburl = 'mongodb://localhost:27017/haven';

mongoose.connect( dburl );

mongoose.connection.on( 'connected', function() {
  console.log( "mongoose has connected to " + dburl );
});

mongoose.connection.on( 'disconnected', function() {
  console.log( "mongoose has disconnected from " + dburl );
});

mongoose.connection.on( 'error', function( err ) {
  console.log( "mongoose connection error " + err );
});

process.on( 'SIGINT', function() {
  mongoose.connection.close( function() {
    console.log( "mongoose has disconnected from " + dburl + " from app termination" );
    process.exit( 0 );
  });
});

// Commonly seen in 'Platforms as a service like Heroku'
process.on( 'SIGTERM', function() {
  mongoose.connection.close( function() {
    console.log( "mongoose has disconnected from " + dburl + " from app termination" );
    process.exit( 0 );
  });
});

process.once( 'SIGUSR2', function() {
  mongoose.connection.close( function() {
    console.log( "mongoose has disconnected from " + dburl + " from app termination" );
    process.kill( process.pid, 'SIGUSR2' );
  });
});

// Bring in schemas and models
require( './locations.model.js' );
