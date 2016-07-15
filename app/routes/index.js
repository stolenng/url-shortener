'use strict';

var path = process.cwd();
var UrlShortener = require(path + '/app/models/UrlShortener.js');
var googl = require('goo.gl');

require('dotenv').load();


var google_key = process.env.GOOGLE_KEY;
googl.setKey(google_key);



module.exports = function (app) {
	

	app.route('/new/http(s)?://:address').get(function (req, res) {
		
		var address = req.params['address'];
		var urlObject = new UrlShortener();

		urlObject.original_url = address;
		
		googl.shorten(address).then(function (shortUrl) {
		        urlObject.short_url = shortUrl;
        		res.json(urlObject);
		    })
		    .catch(function (err) {
				res.status(500).send('Please Enter Correct Url');
		    });
	});


	app.route('/new').get(function (req, res) {
		res.sendFile(path + '/public/index.html');
	});

	app.route('/').get(function (req, res) {
		res.sendFile(path + '/public/index.html');
	});
	
	app.use(function(req, res) {
		res.send({ error : "Please enter correct Url Format" });
	});

};
