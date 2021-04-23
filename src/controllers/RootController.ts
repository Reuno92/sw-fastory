import axios, { AxiosResponse } from "axios";

export default class RootController {
  public async getAll(): Promise<Response> {
    return await axios
      .get("https://swapi.dev/api/")
      .then((res: AxiosResponse) => res.data)
      .catch((err) => console.log(err));
  }
}
