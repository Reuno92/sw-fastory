import { Server } from "hapi";
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

  await server.register([
    require('blipp'),

  ]);

  await server.start();
  console.log(`Server running on %s`, server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
