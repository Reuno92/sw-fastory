import { ResponseV1Model } from "../models/Response.v1.model";
import { ServerRoute, Request } from "hapi";
import { PlanetsController } from "../controllers/PlanetsController";
import { PlanetsV1Models } from "../models/Planets.v1.models";
import { SearchController } from "../controllers/SearchController";

const API_PLANET = "/api/v1/planets";

const PlanetV1Routes: Array<ServerRoute> = [
  {
    method: "GET",
    path: API_PLANET,
    handler: (request: Request): Promise<ResponseV1Model> => {
      if (request.query?.search) {
        return new SearchController().searchTerm("planets", request.query?.search.toString());
      }
      return new PlanetsController().getAllPlanets();
    },
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
