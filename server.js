var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var messages = [{message:"test",username:"me",createdAt:"2015-09-25T19:07:32.214Z"}];

// app.use();
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	
	next();
});

app.get('/', function(req, res) {
	res.json(messages);
});

app.post('/', function(req, res) {
	var newMsg = req.body;
	
	newMsg.createdAt = new Date();
	
	messages.push(req.body);
	
	console.log(messages);
});

app.listen(5546, function() {
	console.log('server running on "http://localhost:' + 5546 + '"');
});