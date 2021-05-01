import { Request, ServerRoute } from "hapi";
import { ResponseV1Models } from "../models/Response.v1.models";
import { VehiclesV1Models } from "../models/Vehicles.v1.models";
import { VehiclesController } from "../controllers/VehiclesController";
import { SearchController } from "../controllers/SearchController";

const APIV1 = "/api/v1/vehicles";

const VehiclesV1Routes: Array<ServerRoute> = [
  {
    method: "GET",
    path: APIV1,
    handler: (request: Request): Promise<ResponseV1Models> => {

      if (request.query?.search) {
        return new SearchController().searchTerm(
          "vehicles",
          request.query?.search.toString()
        );
      }

      return new VehiclesController().getAllVehicles();
    },
    options: {
      auth: false
    }
  },
  {
    method: "GET",
    path: APIV1 + "/{id}",
    handler: async (request: Request): Promise<VehiclesV1Models> => {
      const ID: string = request.params.id.toString();
      return await new VehiclesController().getVehicle(ID);
    },
    options: {
      auth: false
    }
  }
];

export default VehiclesV1Routes;
