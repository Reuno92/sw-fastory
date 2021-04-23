import { Request, ServerRoute } from "hapi";
import { StarshipsV1Controller } from "../controllers/StarshipsController";
import { ResponseV1Model } from "../models/Response.v1.model";
import { StarshipsV1Models } from "../models/Starships.v1.models";

const APIV1 = "/api/v1/";

const StarshipsV1Routes: Array<ServerRoute> = [
  {
    method: "GET",
    path: APIV1 + "starships/",
    handler: (): Promise<ResponseV1Model>  => {
      return new StarshipsV1Controller().getAllStarships();
    },
    options: {
      auth: false
    }
  },
  {
    method: "GET",
    path: APIV1 + "starships/{id}",
    handler: (request: Request): Promise<StarshipsV1Models> => {
      const ID = request.params.id.toString();
      return new StarshipsV1Controller().getStarship(ID);
    }
  }
];

export default StarshipsV1Routes;
