import { ResponseV1Models } from "../models/Response.v1.models";
import axios, { AxiosResponse, AxiosError } from "axios";
import { SpeciesV1Models } from "../models/Species.v1.models";

export class SpeciesController {
  private static API_SPECIES = "https://swapi.dev/api/species/";

  public static getAllSpecies(): Promise<ResponseV1Models> {
    return axios
      .get(this.API_SPECIES)
      .then((res: AxiosResponse) => res.data)
      .catch((err: AxiosError) => console.log(err));
  }

  public static getSpecie(id: string): Promise<SpeciesV1Models> {
    return axios
      .get(this.API_SPECIES + id)
      .then((res: AxiosResponse) => res.data)
      .catch((err: AxiosError) => console.error(err));
  }
}
