import io from "socket.io-client";

export const initiateSocket = (roomId) => {
  const socket = io.connect("http://localhost:3030", { query: { roomId } });
  console.log(`Connecting socket...`);
  return socket;
};

// export const disconnectSocket = () => {
//   console.log("Disconnecting socket...");
//   if (socket) socket.disconnect();
// };

// export const subscribeToChat = (cb) => {
//   if (!socket) return true;
//   socket.on("chat", (msg) => {
//     console.log("Websocket event received!");
//     return cb(null, msg);
//   });
// };

// export const sendMessage = (room, message) => {
//   if (socket) socket.emit("chat", { message, room });
// };
