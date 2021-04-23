import { ServerRoute } from "hapi";
import rootRoutes from "./root.v1.routes";

const routes: Array<ServerRoute> = [
  ...rootRoutes
];

export default routes;
