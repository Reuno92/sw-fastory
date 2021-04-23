import { ServerRoute } from "hapi";
import RootV1Routes from "./Root.v1.routes";
import PeopleV1Routes from "./People.v1.routes";
import FilmsV1Routes from "./Films.v1.routes";
import StarshipsV1Routes from "./Starships.v1.routes";
import VehiclesV1Routes from "./Vehicles.v1.routes";
import SpeciesV1Routes from "./Species.v1.routes";
import PlanetV1Routes from "./Planets.v1.routes";

const routes: Array<ServerRoute> = [
  ...RootV1Routes,
  ...PeopleV1Routes,
  ...FilmsV1Routes,
  ...StarshipsV1Routes,
  ...VehiclesV1Routes,
  ...SpeciesV1Routes,
  ...PlanetV1Routes
];

export default routes;
