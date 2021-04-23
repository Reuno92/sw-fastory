import { ResponseV1Model } from "../models/Response.v1.model";
import { ServerRoute, Request } from "hapi";
import { PlanetsController } from "../controllers/PlanetsController";
import { PlanetsV1Models } from "../models/Planets.v1.models";

const API_PLANET = "/api/v1/planets";

const PlanetV1Routes: Array<ServerRoute> = [
  {
    method: "GET",
    path: API_PLANET,
    handler: (): Promise<ResponseV1Model> =>
      new PlanetsController().getAllPlanets(),
    options: {}
  },
  {
    method: "GET",
    path: API_PLANET + "{id}",
    handler: (request: Request): Promise<PlanetsV1Models> => {
      const ID = request.params.id.toString();
      return new PlanetsController().getPlanet(ID);
    }
  }
];

export default PlanetV1Routes;
