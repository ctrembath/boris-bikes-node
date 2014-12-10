var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set("view engine", "ejs");

app.get('/', function(req, res) {
 res.render("index");
  
});

// app.get('/help', function(req, res) {
  
// });

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
