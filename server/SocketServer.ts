import { Server } from "http";
import * as io from "socket.io";
import { SocketController } from "./SocketController";
import express from "express";
import path from "path";

export class SocketServer {
  public static readonly PORT: number = 2222;
  private socketController: SocketController;
  private httpConnection: Server;
  private socketHandler: io.Server;
  private app: express.Application;

  constructor() {
    this.app = express();
    this.httpConnection = new Server(this.app);
    this.socketHandler = new io.Server(this.httpConnection);
    this.socketController = new SocketController(this.socketHandler);
    this.listen();
  }

  private listen(): void {
    this.httpConnection.listen(SocketServer.PORT, () => {
      console.log("Server listening at port " + SocketServer.PORT);
    });
  }
}
