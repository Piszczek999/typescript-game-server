import { Socket, createSocket } from "dgram";
import { SocketController } from "./SocketController";

export class SocketServer {
  public static readonly PORT: number = 2222;
  private socketController: SocketController;
  private udpSocket: Socket;

  constructor() {
    this.udpSocket = createSocket("udp4");
    this.socketController = new SocketController(this.udpSocket);
    this.listen();
  }

  private listen(): void {
    this.udpSocket.on("listening", () => {
      const address = this.udpSocket.address();
      console.log(`Server listening on ${address.address}:${address.port}`);
    });

    this.udpSocket.bind(SocketServer.PORT);
  }
}
