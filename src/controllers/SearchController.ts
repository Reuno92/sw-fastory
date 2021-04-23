import axios, { AxiosResponse } from "axios";
import { ResponseV1Model } from "../models/Response.v1.model";

export class SearchController {
  public async searchTerm(
    entity: string,
    term: string
  ): Promise<ResponseV1Model> {
    return await axios
      .get(`https://swapi.dev/api/${entity}/?search=${term}`)
      .then((res: AxiosResponse) => res.data)
      .catch((err) => console.error(err));
  }
}
