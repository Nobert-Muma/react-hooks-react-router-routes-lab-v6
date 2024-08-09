import Home from "../src/pages/Home";
import Directors from "../src/pages/Directors";
import Actors from "../src/pages/Actors";
import Movie from "../src/pages/Movie";
// import ErrorPage from "./pages/ErrorPage";
const routes = [
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/directors",
    element:<Directors/>
  },
  {
    path:"/actors",
    element:<Actors/>
  },
  {
    path:"/movie/:id",
    element:<Movie/>
  }
  ];

export default routes;