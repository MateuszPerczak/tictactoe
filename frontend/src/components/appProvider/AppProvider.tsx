import { ThemeProvider } from "@emotion/react";
import useTheme from "@hooks/useTheme/useTheme";
import type { FC, PropsWithChildren } from "react";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const theme = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
