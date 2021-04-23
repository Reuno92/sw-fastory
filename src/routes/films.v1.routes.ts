import { ServerRoute } from "hapi";
import { FilmController } from "../controllers/FilmController";
import { ResponseV1Model } from "../models/Response.v1.model";
import { Request } from "hapi";

const APIV1 = "/api/v1/films/";

const FilmV1Routes: Array<ServerRoute> = [
  {
    method: "GET",
    path: APIV1,
    handler: (): Promise<ResponseV1Model> => {
      return new FilmController().getAllMovies();
    },
    options: {
      auth: false
    }
  },
  {
    method: "GET",
    path: APIV1 + "{id}",
    handler: (request: Request): Promise<ResponseV1Model> => {
      const id: string = request.params?.id.toString();
      return new FilmController().getMovie(id);
    },
    options: {
      auth: false
    }
  }
];

export default FilmV1Routes;
