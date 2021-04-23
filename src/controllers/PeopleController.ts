import axios from "axios";
import { ResponseV1Model } from "../models/Response.v1.model";

export class PeopleController {
  public getAllPeople(): Promise<ResponseV1Model> {
    return axios
      .get("https://swapi.dev/api/people/")
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        throw err.message;
      });
  }

  public getPerson(id: string): Promise<ResponseV1Model> {
    return axios
      .get("https://swapi.dev/api/people/" + id)
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        throw err.message;
      });
  }
}
