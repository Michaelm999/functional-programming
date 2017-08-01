const
  express = require('express'),
  app = express(),
  httpServer = require('http').Server(app),
  socketServer = require('socket.io')(httpServer)

  PORT = 3000

app.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname})
});

socketServer.on('connection', (socket)=> {
  socket.on('chat message', function(msg){
      socketServer.emit('chat message', msg);
    });
  });

httpServer.listen(PORT, function(){
  console.log('Server listening on port', PORT)
});
