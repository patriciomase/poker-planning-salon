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

let usersOnRoom = {};

// handle incoming connections from clients
io.sockets.on('connection', function(socket) {
  console.log('Someone connected.')
  socket.on('room', function(data) {
    console.log(`Joining room ${data.room}`)  
    socket.join(data.room, () => {
      
      // Move this to a library.
      if (usersOnRoom[data.room] === undefined) {
        usersOnRoom[data.room] = [];
      }
      
      usersOnRoom[data.room].push({
        id: Date.now(),
        name: data.name
      });
      
      console.log('notifying connection to the others');
      io
        .sockets
        .in(data.room)
        .emit(
          'messageRoom',
          usersOnRoom[data.room]
        );
    });
    
  });
});