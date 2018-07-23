const path = require('path');
const http = require('http');  //Epress uses node's HTTP, but for Socket.io you need to expose HTTP
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

let app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

// Middleware
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'me@example.com',
    text: 'Sup my brother',
    createdAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
  });

  socket.on('disconnect', (socket) => {
    console.log('User disconnected');
  });


});

server.listen(port, () => {
  console.log(`Started on port ${port} `);
});
