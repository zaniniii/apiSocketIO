//////////////////////////////////
// Socket Rooms
/////////////////////////////////////

module.exports = rooms = (socket) => {
    
    socket.on('joinRoom', userId => {
      if (userId) {
        socket.join(userId)
      }
    })
  
    socket.on('leaveRoom', userId => {
      if (userId) {
        socket.leave(userId)
      }
    })
}
  