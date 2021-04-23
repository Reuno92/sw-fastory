import { ServerRoute } from "hapi";
import { FilmsController } from "../controllers/FilmsController";
import { ResponseV1Model } from "../models/Response.v1.model";
import { Request } from "hapi";
import { SearchController } from "../controllers/SearchController";

const APIV1 = "/api/v1/films/";

const FilmV1Routes: Array<ServerRoute> = [
  {
    method: "GET",
    path: APIV1,
    handler: (request: Request): Promise<ResponseV1Model> => {

      if (request.query?.search) {
          return new SearchController().searchTerm('films', request.query?.search.toString())
      }

      return new FilmsController().getAllMovies();
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
      return new FilmsController().getMovie(id);
    },
    options: {
      auth: false
    }
  }
];

export default FilmV1Routes;
