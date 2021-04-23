import axios, { AxiosResponse } from "axios";
import { RootV1Models } from "../models/Root.v1.models";

export default class RootController {
  public async getAll(): Promise<RootV1Models> {
    return await axios
      .get("https://swapi.dev/api/")
      .then((res: AxiosResponse) => res.data)
      .catch((err) => console.log(err));
  }
}
