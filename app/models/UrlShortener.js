'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UrlShortener = new Schema({
    original_url: {
        type: String,
        default:null
    },
	short_url: {
	    type: String,
    	default:null
    	},
	_id:{ 
	    select:false 
	    
	}
});

module.exports = mongoose.model('UrlShortener', UrlShortener);
