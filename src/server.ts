import { Server } from "hapi";
import Routes from "./routes/index.routes";

const init = async () => {
  const server = new Server({
    debug: { request: ["error"] },
    port: process.env.port || 3000,
    host: process.env.host || "localhost",
    routes: {
      cors: {
        origin: ["*"]
      }
    }
  });

  server.route(Routes);

  await server.start();
  console.log(`Server running on %s`, server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

/*class ServerNode {
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

  private static async init() {
    try {
      await this.serverConfiguration();
      await ServerNode.instance?.register({
        plugin: pino,
        options: {
          prettyPrint: true
        }
      });
      ServerNode.routes();
      ServerNode.instance?.start();
      console.log(`Server starting on http://${this.host}:${this.port}`);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  private static routes() {
    return [
      {
        method: "*",
        path: "/",
        handler: (request: any, response: any) => response("404 ERROR ! Page Not Found!")
      },
      {
        method: "GET",
        path: "/api/v1/",
        handler: async (request: any, response: any) => {
          return response("blablba");/!*await new RootController().getAll()
        .then( (res: Response): Promise<RootV1Models> => res.json())
        .catch( (err: any) => err);*!/
        },
        options: {
          auth: false
        }
      }
    ];
  }
}*/
