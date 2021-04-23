import { ServerRoute } from "hapi";
import rootV1Routes from "./root.v1.routes";

const routes: Array<ServerRoute> = [
  ...rootV1Routes,

];

export default routes;
