import * as Hapi from "hapi";
import RootController from "../controllers/RootController";

const rootRoutes: Array<Hapi.ServerRoute> = [
  {
    method: "GET",
    path: "/api/v1/",
    handler: async (): Promise<Response> => {
        return await new RootController().getAll();
    },
    options: {
      auth: false
    }
  }
];

export default rootRoutes;
