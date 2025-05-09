const chatController = require("../controllers/chat.controller");

module.exports = (io, socket) => {
  socket.on("send_message", (data) => {
    chatController.handleSendMessage(io, socket, data);
  });

  socket.on("disconnect", () => {
    console.log(`🔴 User disconnected: ${socket.id}`);
  });
};
