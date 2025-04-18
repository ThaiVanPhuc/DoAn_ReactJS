exports.handleSendMessage = (io, socket, data) => {
  console.log(`💬 ${data.username}: ${data.message}`);
  io.emit("receive_message", {
    username: data.username,
    message: data.message,
    time: new Date().toISOString(),
  });
};
