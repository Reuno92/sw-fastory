import { Request, ServerRoute } from "hapi";
import { ResponseV1Model } from "../models/Response.v1.model";
import { VehiclesV1Models } from "../models/Vehicles.v1.models";
import { VehiclesController } from "../controllers/VehiclesController";

const APIV1 = "/api/v1/";

const VehiclesV1Routes: Array<ServerRoute> = [
  {
    method: "GET",
    path: APIV1 + "vehicles/",
    handler: (): Promise<ResponseV1Model> => {
      return VehiclesController.getAllVehicles();
    },
    options: {
      auth: false
    }
  },
  {
    method: "GET",
    path: APIV1 + "vehicles/{id}",
    handler: (request: Request): Promise<VehiclesV1Models> => {
      const ID: string = request.params.id.toString();
      return VehiclesController.getVehicle(ID);
    },
    options: {
      auth: false
    }
  }
];

export default VehiclesV1Routes;
