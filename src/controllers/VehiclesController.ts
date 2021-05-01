import { ResponseV1Models } from "../models/Response.v1.models";
import { VehiclesV1Models } from "../models/Vehicles.v1.models";
import axios, { AxiosResponse } from "axios";

export class VehiclesController {
  private API_VEHICLES = "https://swapi.dev/api/vehicles";

  public getAllVehicles(): Promise<ResponseV1Models> {
    return axios
      .get(this.API_VEHICLES)
      .then((res: AxiosResponse) => res.data)
      .catch((err) => console.log(err));
  }

  public getVehicle(id: string): Promise<VehiclesV1Models> {
    return axios
      .get(this.API_VEHICLES + '/' +id)
      .then((res: AxiosResponse) => res.data)
      .catch((err) => console.log(err));
  }
}
