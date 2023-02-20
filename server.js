//const ronin = require('ronin-server')
//const mocks = require('ronin-mocks')
const express = require('express')
const calc = require('calculator.js')

//const server = ronin.server()

//server.use('/', mocks.server(server.Router(), false, true))
//server.start()

var app = express()

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/test', function(req, res) {
  res.send('Thanks for "test"ing!');
});

app.get('/add', function(req, res) {
  res.send(calc.add(1, 1));
});

var server = app.listen(8000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:s%', host, port);
});
