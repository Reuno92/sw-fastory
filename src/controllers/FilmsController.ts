import { ResponseV1Models } from "../models/Response.v1.models";
import axios, { AxiosResponse } from "axios";
import { FilmsV1Models } from "../models/Films.v1.models";

export class FilmsController {
  public getAllMovies(): Promise<ResponseV1Models> {
    return axios
      .get("https://swapi.dev/api/films/")
      .then((res: AxiosResponse) => res.data)
      .catch((err) => {
        console.error(err);
        throw err.message;
      });
  }

  public getMovie(id: string): Promise<FilmsV1Models> {
    return axios
      .get("https://swapi.dev/api/films/" + id)
      .then((res: AxiosResponse) => res.data)
      .catch((err) => {
        console.error(err);
        throw err.message;
      });
  }
}
