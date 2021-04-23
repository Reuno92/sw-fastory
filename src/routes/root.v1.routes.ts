import * as Hapi from "hapi";
import RootController from "../controllers/RootController";
import { RootV1Models } from "../models/Root.v1.models";

const rootRoutes: Array<Hapi.ServerRoute> = [
  {
    method: "GET",
    path: "/api/v1/",
    handler: async (): Promise<RootV1Models> => {
      return await new RootController().getAll();
    },
    options: {
      auth: false
    }
  }
];

export default rootRoutes;
