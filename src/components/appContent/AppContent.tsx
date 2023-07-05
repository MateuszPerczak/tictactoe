import GlobalStyle from "@components/globalStyle/GlobalStyle";
import type { FC } from "react";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <h1>Basic Vite app</h1>
      <GlobalStyle />
    </>
  );
};

export default AppContent;
