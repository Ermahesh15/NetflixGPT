import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import GptSearch from "../pages/GptSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },

      {
        path: "/tv-series",
        element: <Series />,
      },

       {
        path: "/gpt-search",
        element: <GptSearch />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
