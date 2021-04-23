import axios, { AxiosResponse } from "axios";

export class SearchController {

  public async searchTerm(entity: string, term: string) {

    return await axios.get(`https://swapi.dev/api/${entity}/?search=${term}`)
      .then((res: AxiosResponse) => res.data)
      .catch( err => console.error(err));
  }
}
