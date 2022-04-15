import { useState } from "react";
import { Global, css } from "@emotion/react";
import MainPage from "./Pages/MainPage";
import PlayPage from "./Pages/PlayPage";
import InfoPage from "./Pages/InfoPage";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [page, setPage] = useState("main");

  const pages = {
    main: <MainPage setPage={setPage} />,
    play: <PlayPage setPage={setPage} />,
    info: <InfoPage setPage={setPage} />,
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
          }
        `}
      />
      {pages[page]}
      <Footer />
    </>
  );
};

export default App;
