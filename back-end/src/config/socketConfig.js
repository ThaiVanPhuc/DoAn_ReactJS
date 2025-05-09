const { Server } = require("socket.io");
const chatSocket = require("../sockets/chatSocket");

function setupSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`🟢 User connected: ${socket.id}`);
    chatSocket(io, socket);
  });
}

module.exports = { setupSocket };
