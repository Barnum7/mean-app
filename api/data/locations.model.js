var mongoose = require( 'mongoose' );

var locationSchema = new mongoose.Schema({
  "ammenities" : [String],
  "neighborhood" : String,
  "name" : {
    type : String,
    required: true
  },
  "address" : {
    type: String,
    required: true
  },
  "description" : {
    type : String,
    required : true
  },
  "city" : {
    type : String,
    required : true
  },
  "photos" : [String]
});

mongoose.model( 'Location', locationSchema, 'locations' );
