import { ResponseV1Models } from "../models/Response.v1.models";
import { PlanetsV1Models } from "../models/Planets.v1.models";
import axios, { AxiosError, AxiosResponse } from "axios";

export class PlanetsController {
  public getAllPlanets(): Promise<ResponseV1Models> {
    return axios
      .get("http://swapi.dev/api/planets/")
      .then((res: AxiosResponse) => res.data)
      .catch((err: AxiosError) => console.error(err));
  }

  public getPlanet(id: string): Promise<PlanetsV1Models> {
    return axios
      .get("http://swapi.dev/api/planets/" + id)
      .then((res: AxiosResponse) => res.data)
      .catch((err: AxiosError) => console.error(err));
  }
}
