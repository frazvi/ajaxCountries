var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require ('mongoose')
var countryList = require('./model/countriesModel.js')

// Create express app object
var app = express();

// App config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public'));


// Routes
app.get('/', function (req, res) {
	res.sendFile('/index.html', {root : '.public'});
})

app.get ('/api/countries', function (req, res) {
	// console.log(countryList.countries)
	res.send(countryList.countries)
})

app.post ('/api/countries', function (req, res) {
	console.log('This is passed from the findCountry() ', req.body);
})
 

// Create server and listen
var port = 3000
app.listen(port, function () {
	console.log('We Are LISTENING on port ' + port)
})