import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "../components/root/Root";
import Game from "../pages/game/Game";
import Menu from "../pages/menu/Menu";
import About from "../pages/menu/subPages/About";
import Play from "../pages/menu/subPages/Play";
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
        path: "play",
        element: <Play />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "game",
        children: [
          {
            path: "ai",
            element: <Game />,
          },
          {
            path: "solo",
            element: <h1>Solo</h1>,
          },
          {
            path: "multiplayer/:gameId",
            element: <h1>Multiplayer</h1>,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

// {
//   path: "menu",
//   element: <Menu />,
//   children: [
//     {
//       index: true,
//       element: (
//         <>
//           <Button
//             icon={Icons.Play}
//             label="Play"
//             description="Haha circle go brrrr."
//             to="menu/play"
//           />
//           <Button
//             icon={Icons.Info}
//             label="About"
//             description="Learn more about this project!"
//             to="about"
//           />
//         </>
//       ),
//     },
//     {
//       path: "play",
//       element: <>Play</>,
//     },
//     {
//       path: "about",
//       element: (
//         <>
//           <h1>About</h1>
//           <Button
//             icon={Icons.Cancel}
//             label="Go back"
//             description="Nah les go home!"
//             to="/menu"
//           />
//         </>
//       ),
//     },
//   ],
// },
// {
//   path: "game",
//   children: [
//     {
//       path: "ai",
//       element: <>Ai</>,
//     },
//     {
//       path: "single",
//       element: <>Single</>,
//     },
//     {
//       path: "multi/:id",
//       element: <>Multi</>,
//     },
//     {
//       path: "rules",
//       element: <>Rules</>,
//     },
//   ],
// },
