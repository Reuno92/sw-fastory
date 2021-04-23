import axios, { AxiosResponse } from "axios";
import { ResponseV1Models } from "../models/Response.v1.models";

export class SearchController {
  public async searchTerm(
    entity: string,
    term: string
  ): Promise<ResponseV1Models> {
    return await axios
      .get(`https://swapi.dev/api/${entity}/?search=${term}`)
      .then((res: AxiosResponse) => res.data)
      .catch((err) => console.error(err));
  }
}
