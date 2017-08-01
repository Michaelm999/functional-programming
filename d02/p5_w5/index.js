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
console.log('a new user connected')
socket.on('server-scream', (data)=> {
  console.log(data.toUpperCase())
  socket.emit('server-says', data.toUpperCase())
  })
})

httpServer.listen(PORT, function(){
  console.log('Server listening on port', PORT)
});
