import Footer from "@components/footer/Footer";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Logo from "@components/logo/Logo";
import PageRenderer from "@components/pageRenderer/PageRenderer";
import Panel from "@components/panel/Panel";
import useNavigation from "@hooks/useNavigation/useNavigation";
import { AnimatePresence } from "framer-motion";

import { type Pages, pages } from "../../pages/pages";

const AppContent = (): JSX.Element => {
  const navigation = useNavigation<Pages>("initial");

  return (
    <>
      <GlobalStyle />
      <main>
        <AnimatePresence>
          <Panel layout transition={{ type: "tween", duration: 0.2 }}>
            <Logo />
            <PageRenderer<Pages> {...navigation} pages={pages} />
          </Panel>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default AppContent;
