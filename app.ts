import { createSocket } from "dgram";
import { Event, UserData } from "./src/UserData";

const server = createSocket("udp4");

const PORT = 2222;

server.on("listening", () => {
  const address = server.address();
  console.log(`Server listening on ${address.address}:${address.port}`);
});

server.on("error", (error) => {
  console.log("Error: " + error.message);
  server.close();
});

server.on("message", (msg, rinfo) => {
  const data = JSON.parse(msg.toString()) as UserData;

  console.log(data);

  switch (data.event) {
    case Event.LOGIN:
      // Handle user login
      break;
    case Event.LOGOUT:
      // Handle user logout
      break;
    case Event.CHAT_MESSAGE:
      if (!data.message) break;
      server.send(data.message, rinfo.port, rinfo.address);
      break;
    case Event.EQUIP_ITEM:
      // Handle equip item
      break;
  }
});

server.bind(PORT);
