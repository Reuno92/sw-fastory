import axios, { AxiosResponse } from "axios";
import { ResponseV1Models } from "../models/Response.v1.models";
import { StarshipsV1Models } from "../models/Starships.v1.models";

export class StarshipsV1Controller {
  getAllStarships(): Promise<ResponseV1Models> {
    return axios
      .get("https://swapi.dev/api/starships/")
      .then((res: AxiosResponse) => res.data)
      .catch((err) => {
        console.error(err);
        throw err.message;
      });
  }

  getStarship(id: string): Promise<StarshipsV1Models> {
    return axios
      .get("https://swapi.dev/api/starships/" + id)
      .then((res: AxiosResponse) => res.data)
      .catch((err) => {
        console.error(err);
        throw err.message;
      });
  }
}
