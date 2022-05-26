import { Global, css } from "@emotion/react";
import type { FC, ReactElement } from "react";

const GlobalStyle: FC = (): ReactElement => {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: "Dongle", sans-serif;
          background-color: #212121;
          color: #fff;
          width: 100vw;
          height: 100vh;
        }
        #root {
          width: 100vw;
          height: 100vh;
          background-image: url(./images/background.webp);
        }
        @font-face {
          font-family: "Segoe Fluent Icons";
          src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
        }
      `}
    />
  );
};

export default GlobalStyle;
