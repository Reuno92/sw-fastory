import { ServerRoute } from "hapi";
import { PeopleController } from "../controllers/PeopleController";
import { ResponseV1Models } from "../models/Response.v1.models";
import { Request } from "hapi";
import { SearchController } from "../controllers/SearchController";

const APIV1 = "/api/v1/";

const PeopleV1Routes: Array<ServerRoute> = [
  {
    method: "GET",
    path: APIV1 + "people/",
    handler: (request: Request): Promise<ResponseV1Models> => {
      if (request.query?.search) {
        return new SearchController().searchTerm(
          "people",
          request.query?.search.toString()
        );
      }

      return new PeopleController().getAllPeople();
    },
    options: {
      auth: false
    }
  },
  {
    method: "GET",
    path: APIV1 + "people/{id}",
    handler: (request: Request): Promise<ResponseV1Models> => {
      const id: string = request.params?.id.toString();
      return new PeopleController().getPerson(id);
    },
    options: {
      auth: false
    }
  }
];

export default PeopleV1Routes;
