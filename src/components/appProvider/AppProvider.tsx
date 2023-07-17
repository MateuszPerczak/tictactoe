import { ThemeProvider } from "@emotion/react";
import useTheme from "@hooks/useTheme/useTheme";
import type { PropsWithChildren } from "react";

const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const theme = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
