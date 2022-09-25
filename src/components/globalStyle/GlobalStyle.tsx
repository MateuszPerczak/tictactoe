import { css, Global, Theme, useTheme } from "@emotion/react";
import { memo } from "react";
import type { FC } from "react";
import useWindowDimensions from "@hooks/useWindowDimensions";

const GlobalStyle: FC = (): JSX.Element => {
  const { color }: Theme = useTheme();
  const { height } = useWindowDimensions();

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          outline: 1px solid #b6fc03aa;
        }
        body {
          display: flex;
          flex-direction: column;
          font-family: "Inter";
          color: ${color};
          overflow: hidden;
          user-select: none;
          height: ${`${height}px`};
          background-image: url("./images/background.webp");
        }
        #root {
          display: flex;
          flex: 1 1 auto;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
