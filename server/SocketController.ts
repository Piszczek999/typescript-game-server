import { Socket } from "dgram";
import { SocketEvent } from "./constants";

export class SocketController {
  private udpSocket: Socket;

  constructor(socket: Socket) {
    this.udpSocket = socket;
    this.listen();
  }

  private listen() {
    // Handle incoming messages
    this.udpSocket.on("message", (msg, rinfo) => {
      const data = JSON.parse(msg.toString());
      console.log("Received message:", data);

      // Example: Handle different types of messages
      switch (data.event) {
        case SocketEvent.SAY_HI:
          console.log("Player says:", data.msg);
          // Broadcast the message to all players
          // this.broadcastMessage(data);
          break;
        // Handle other types of messages as needed
      }
    });
  }

  // private broadcastMessage(data: any) {
  //   for (const client of this.connectedClients) {
  //     if (/* condition to exclude sender */) {
  //       this.udpSocket.send(JSON.stringify(data), client.port, client.address);
  //     }
  //   }
  // }
}
