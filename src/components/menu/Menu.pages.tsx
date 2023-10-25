import type { MenuPages } from "./Menu.types";
import About from "./pages/about/About";
import Initial from "./pages/initial/Initial";
import Main from "./pages/main/Main";
import Play from "./pages/play/Play";

export const menuPages: MenuPages = (pageProps, page) => {
  return (
    {
      initial: <Initial {...pageProps} />,
      play: <Play {...pageProps} />,
      about: <About {...pageProps} />,
      main: <Main {...pageProps} />,
    }[page] ?? <></>
  );
};
