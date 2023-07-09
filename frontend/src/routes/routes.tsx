import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Menu from "../components/menu/Menu";
import Root from "../components/root/Root";
import NotFound from "../pages/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
      {
        path: "game",
        children: [
          {
            path: "ai",
            element: <>Ai</>,
          },
          {
            path: "single",
            element: <>Single</>,
          },
          {
            path: "multi/:id",
            element: <>Multi</>,
          },
          {
            path: "rules",
            element: <>Rules</>,
          },
        ],
      },
      {
        path: "about",
        element: <>About</>,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
