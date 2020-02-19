/////////////////////////////////////
// Imports
/////////////////////////////////////
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

/////////////////////////////////////
// Sockets
/////////////////////////////////////
const rooms = require('./sockets/rooms')
const messages = require('./sockets/messages')
const notifications = require('./sockets/notifications')

io.on('connection', async socket => {
  await rooms(socket);
  await messages(socket);
  await notifications(socket);
  
})

/////////////////////////////////////
// Service Start
/////////////////////////////////////
const PORT = 4000
server.listen(PORT, () => {
  console.log(`Micro-service SocketIO Started Service in port: ${PORT}`)
})