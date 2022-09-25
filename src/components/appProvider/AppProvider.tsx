import type { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import useTheme from "@hooks/useTheme";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default AppProvider;
