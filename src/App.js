import { useState } from "react";
import { Global, css } from "@emotion/react";
import MainPage from "./Pages/MainPage";
import PlayPage from "./Pages/PlayPage";
import InfoPage from "./Pages/AboutPage";
import TestPage from "./Pages/TestPage";

const App = () => {
  const [page, setPage] = useState("main");

  const pages = {
    main: <MainPage setPage={setPage} />,
    play: <PlayPage setPage={setPage} />,
    about: <InfoPage setPage={setPage} />,
    test: <TestPage setPage={setPage} />,
  };

  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            margin: 0;
            box-sizing: border-box;
          }
          body {
            font-family: "Dongle", sans-serif;
            font-size: 1.5rem;
            color: #fff;
            background: #212121;
            overflow: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          @font-face {
            font-family: "Segoe Fluent Icons";
            src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
          }
        `}
      />
      {pages[page]}
    </>
  );
};

export default App;
