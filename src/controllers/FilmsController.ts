import { ResponseV1Model } from "../models/Response.v1.model";
import axios, { AxiosResponse } from "axios";

export class FilmsController {
  public getAllMovies(): Promise<ResponseV1Model> {
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
