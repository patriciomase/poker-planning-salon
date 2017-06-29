const express = require('express');  
const app = express();  
const server = require('http').createServer(app);  
const io = require('socket.io')(server);

//app.use(express.static(__dirname + '/bower_components'));  
app.get('/', function(req, res, next) {  
  res.sendFile(__dirname + '/index.html');
});

server.listen(30003, function() {
  console.log('io listening in port 30003');
});