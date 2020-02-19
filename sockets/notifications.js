//////////////////////////////////
// Socket - Notifications
/////////////////////////////////////

module.exports = notifications = (socket) => {
    socket.on('sendNotification', notification => {
    socket.to(`${notification.userTo._id}`).emit('notifications', notification)
})
    

}