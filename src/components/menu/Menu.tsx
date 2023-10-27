import Logo from "@components/logo/Logo";
import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { menuPages } from "./Menu.pages";
import StyledMenu from "./Menu.styles";
import type { GoBack, MenuState, SetPage } from "./Menu.types";

const Menu = (): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuState>({
    page: "",
    pageHistory: [],
  });

  const setPage: SetPage = (page) => {
    setMenuState((prevState) => ({
      page,
      pageHistory: [...prevState.pageHistory, page],
    }));
  };

  const goBack: GoBack = (): void => {
    setMenuState((prevState) => {
      const pageHistory = [...prevState.pageHistory];
      pageHistory.pop();
      const page = pageHistory[pageHistory.length - 1];
      return { page, pageHistory };
    });
  };

  const page = useMemo(() => menuPages({ setPage, goBack }, menuState.page), [menuState]);

  useEffect(() => {
    setTimeout(() => setPage("initial"), 300);
  }, []);

  return (
    <AnimatePresence>
      <StyledMenu layout transition={{ type: "tween", duration: 0.2 }}>
        <Logo />
        {page}
      </StyledMenu>
    </AnimatePresence>
  );
};

export default Menu;
