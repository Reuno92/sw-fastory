import { ServerRoute } from "hapi";
import { PeopleController } from "../controllers/PeopleController";
import { ResponseV1Model } from "../models/Response.v1.model";
import { Request } from "hapi";

const APIV1 = "/api/v1/";

const PeopleV1Routes: Array<ServerRoute> = [
  {
    method: "GET",
    path: APIV1 + "people/",
    handler: (): Promise<ResponseV1Model> => {
      return new PeopleController().getAllPeople();
    },
    options: {
      auth: false
    }
  },
  {
    method: "GET",
    path: APIV1 + "people/{id}",
    handler: (request: Request): Promise<ResponseV1Model> => {
      const id: string = request.params?.id.toString();
      return new PeopleController().getPerson(id);
    },
    options: {
      auth: false
    }
  }
];

export default PeopleV1Routes;
