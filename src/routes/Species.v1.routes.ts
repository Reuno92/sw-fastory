import { Request, ServerRoute } from "hapi";
import { ResponseV1Models } from "../models/Response.v1.models";
import { SpeciesController } from "../controllers/SpeciesController";
import { SpeciesV1Models } from "../models/Species.v1.models";
import { SearchController } from "../controllers/SearchController";

const APIV1 = "/api/v1/species";

const SpeciesV1Routes: Array<ServerRoute> = [
  {
    method: "GET",
    path: APIV1,
    handler: (request: Request): Promise<ResponseV1Models> => {
      if (request.query?.search) {
        return new SearchController().searchTerm(
          "species",
          request.query?.search.toString()
        );
      }

      return SpeciesController.getAllSpecies();
    },
    options: {
      auth: false
    }
  },
  {
    method: "GET",
    path: APIV1 + "/{id}",
    handler: (request: Request): Promise<SpeciesV1Models> => {
      const ID = request.params.id.toString();
      return SpeciesController.getSpecie(ID);
    },
    options: {
      auth: false
    }
  }
];

export default SpeciesV1Routes;
