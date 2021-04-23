import { ServerRoute } from "hapi";
import rootV1Routes from "./root.v1.routes";
import PeopleV1Routes from "./people.v1.routes";
import FilmsV1Routes from './films.v1.routes';

const routes: Array<ServerRoute> = [
  ...rootV1Routes,
  ...PeopleV1Routes,
  ...FilmsV1Routes,
];

export default routes;
