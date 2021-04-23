import { ResponseV1Model } from "../models/Response.v1.model";
import axios, { AxiosResponse, AxiosError } from "axios";
import { SpeciesV1Model } from "../models/Species.v1.model";

export class SpeciesController {
  private static API_SPECIES = "https://swapi.dev/api/species/";

  public static getAllSpecies(): Promise<ResponseV1Model> {
    return axios
      .get(this.API_SPECIES)
      .then((res: AxiosResponse) => res.data)
      .catch((err: AxiosError) => console.log(err));
  }

  public static getSpecie(id: string): Promise<SpeciesV1Model> {
    return axios
      .get(this.API_SPECIES + id)
      .then((res: AxiosResponse) => res.data)
      .catch((err: AxiosError) => console.error(err));
  }
}
