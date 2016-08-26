var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );
var locationsCtrl = require( '../controllers/locations.controllers.js' );

router
  .route( '/locations' )
  .get( locationsCtrl.locationsGetAll )
  .post( locationsCtrl.locationCreate );

router
  .route( '/locations/:locationId' )
  .get( locationsCtrl.locationsGetOne )
  .put( locationsCtrl.locationsUpdateOne )
  .delete( locationsCtrl.locationsDeleteOne );

module.exports = router;
