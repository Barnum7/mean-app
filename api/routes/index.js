var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );
var locationsCtrl = require( '../controllers/locations.controllers.js' );

router
  .route( '/locations' )
  .get( locationsCtrl.locationsGetAll );

router
  .route( '/locations/:locationId' )
  .get( locationsCtrl.locationsGetOne );

router
  .route( '/locations/new' )
  .post( locationsCtrl.locationCreate );


module.exports = router;
