//////////////////////////////////
// Socket Messages Travel
/////////////////////////////////////

module.exports = messages = (socket) => {

  socket.on('joinTravelRoom', traveId => {
    // console.log(traveId)
    if (traveId) {
      socket.join(traveId)
    }
  })

  socket.on('leaveTravelRoom', traveId => {
    if (traveId) {
      socket.leave(traveId)
    }
  })

  socket.on('sendMessageTravel', message => {
    socket.to(`${message.travel}`).emit('mensagens', message)
  })

}
