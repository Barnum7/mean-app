var express = require ( 'express' );
var app = express();
var path = require ( 'path' );

app.set( 'port', 3000 );
app.use( express.static( path.join( __dirname, 'public' ) ) );

app.get( '/', function( req, res ) {
  console.log( 'GET the homepage' );
  res
    .status( 200 )
    .sendFile( path.join( __dirname , 'public', 'index.html' ) );
});

app.get( '/json', function( req, res ) {
  console.log( 'GET JSON' );
  res
    .status( 200 )
    .json( {
      'Asimov' : 'online'
    } );
});

app.get( '/file', function( req, res ) {
  console.log( 'GET File' );
  res
    .status( 200 )
    .sendFile( path.join( __dirname , 'app.js' ) );
});

var server = app.listen( app.get( 'port' ), function() {
  var port = server.address().port;
  console.log( 'Asimov, online on Port ' + port );
});
