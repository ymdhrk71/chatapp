export default (io, socket) => {
  // 入室メッセージをクライアントに送信する
  socket.on("enterEvent", (data) => {
    socket.broadcast.emit("enterEvent", data)
  })

  // 退室メッセージをクライアントに送信する
  socket.on("exitEvent", (data) => {
    socket.broadcast.emit("exitEvent", data)
  })

  // 投稿メッセージを送信する
  socket.on("publishEvent", (data) => {
    io.sockets.emit("publishEvent", data)
  })

  // 削除通知を送信する
  socket.on("deleteEvent", (uid) => {
    io.sockets.emit("deleteEvent", uid)
  })

  // 更新通知を送信する
  socket.on("updateEvent", (data) => {
    io.sockets.emit("updateEvent", data)
  })
}