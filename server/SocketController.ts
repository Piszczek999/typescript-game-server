import { Server } from "socket.io";
import { SocketEvent } from "./constants";

export class SocketController {
  private socketHandler: Server;

  constructor(handler: Server) {
    this.socketHandler = handler;
    this.listen();
  }

  private listen() {
    this.socketHandler.on(SocketEvent.CONNECT, (socket) => {
      console.log("New player connected!");

      socket.on(SocketEvent.DISCONNECT, (socket: any) => {
        console.log("Player disconnected!");
      });

      socket.on(SocketEvent.SAY_HI, (data: any) => {
        console.log("player says: " + data.msg);

        // this.socketHandler.sockets.emit(SocketEvent.SAY_HI, data);
        socket.broadcast.emit(SocketEvent.SAY_HI, data.msg);
      });
    });
  }
}
