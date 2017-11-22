'use strict';

var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.status(200).send('hello from otherside');
});

var server = app.listen(process.env.PORT || '8000', function(){
	console.log('app listening on port', server.address().port);
	console.log('press ctrl+c to quit');
})