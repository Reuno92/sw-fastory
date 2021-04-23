import axios from "axios";
import { ResponseV1Models } from "../models/Response.v1.models";

export class PeopleController {
  public getAllPeople(): Promise<ResponseV1Models> {
    return axios
      .get("https://swapi.dev/api/people/")
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        throw err.message;
      });
  }

  public getPerson(id: string): Promise<ResponseV1Models> {
    return axios
      .get("https://swapi.dev/api/people/" + id)
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        throw err.message;
      });
  }
}
