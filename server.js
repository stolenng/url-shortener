'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var googl = require('goo.gl');


require('dotenv').load();


var google_key = process.env.GOOGLE_KEY;
googl.setKey(google_key);

var app = express();


mongoose.connect(process.env.MONGO_URI);

//app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
//app.use('/common', express.static(process.cwd() + '/app/common'));


routes(app, googl);

var port = process.env.PORT || 8080;

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});