import { ServerRoute } from "hapi";
import rootV1Routes from "./root.v1.routes";
import PeopleV1Routes from "./people.v1.routes";
import FilmsV1Routes from "./films.v1.routes";
import StarshipsV1Routes from "./starships.v1.routes";
import VehiclesV1Routes from "./vehicules.v1.routes";
import SpeciesV1Routes from "./species.v1.routes";

const routes: Array<ServerRoute> = [
  ...rootV1Routes,
  ...PeopleV1Routes,
  ...FilmsV1Routes,
  ...StarshipsV1Routes,
  ...VehiclesV1Routes,
  ...SpeciesV1Routes
];

export default routes;
