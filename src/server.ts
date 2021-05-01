import Hapi, { Server } from "hapi";
import Routes from "./routes/_index.routes";
import dotenv from "dotenv";

dotenv.config({
  encoding: "utf8",
  debug: true
});

const init = async () => {

  const server = new Server({
    debug: { request: ["error"] },
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
    routes: {
      cors: {
        origin: ["*"],
        maxAge: 3600,
        headers: ["Accept", "Authorization", "Content-Type"]
      }
    }
  });

  server.route(Routes);

  const devPluginDev: Array<Hapi.Plugin<any>> = [
    require('blipp'),
    {
      plugin: require('hapi-pino'),
      options: {
        prettyPrint: process.env.NODE_ENV !== 'production',
        redact: ['req.headers.authorization']
      }
    }
  ];

  const devPluginProd: Array<Hapi.Plugin<any>> = [];

  await server.register( (process.env.NODE_ENV !== 'production') ? devPluginDev : devPluginProd );
  await server.start();
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
