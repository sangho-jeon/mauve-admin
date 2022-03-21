import io from "socket.io-client";

export const initiateSocket = (roomId) => {
  const socket = io.connect("http://localhost:3030", { query: { roomId } });
  console.log(`Connecting socket...`);
  return socket;
};
