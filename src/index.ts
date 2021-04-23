import * as Hapi from 'hapi';
import { Server, ServerInjectOptions, ServerInjectResponse } from 'hapi';
import morgan from "morgan";

class ServerNode {

  private static instance: Server | undefined;
  private static port: number;
  private static host: string;

  constructor(port: number, host: string) {
    ServerNode.port = port;
    ServerNode.host = host;
    ServerNode.init();
  }

  private static async serverConfiguration() {
      this.instance = await new Hapi.Server({
        port: this.port,
        host: this.host
      });
  }

  private static async init(): Promise<void> {
    try {
      await this.serverConfiguration();
      ServerNode.instance?.start();

      console.log(`Server starting on http://${this.host}:${this.port}`);

      morgan('dev');
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

}

new ServerNode(3000, 'localhost');
