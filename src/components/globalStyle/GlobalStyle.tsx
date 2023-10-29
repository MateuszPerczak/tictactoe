import { css, Global, type Theme, useTheme } from "@emotion/react";
import type { FC } from "react";
import { memo } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  const { background, textPrimary }: Theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          /* outline: 1px solid #0bd871aa; */
        }
        html,
        body {
          height: 100%;
          scroll-behavior: smooth;
          overflow: hidden;
        }
        body {
          display: flex;
          background: ${background};
          color: ${textPrimary};
          user-select: none;
          font-family: "Nunito";
          background-image: url("./images/background.webp");
          background-size: 100px;
        }
        main {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
