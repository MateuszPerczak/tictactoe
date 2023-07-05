import { css, Global, type Theme, useTheme } from "@emotion/react";
import type { FC } from "react";
import { memo } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  const { background, color }: Theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html,
        body {
          height: 100%;
          scroll-behavior: smooth;
        }
        body {
          display: flex;
          background: ${background};
          color: ${color};
          user-select: none;
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
