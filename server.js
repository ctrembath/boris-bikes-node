var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set("view engine", "ejs");


app.get('/', function(request, response) {
 response.render("index");
});

app.get('/station/', function(request, response){
  response.render('station', { numberOfBikes: '10' });
});



server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
