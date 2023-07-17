import Footer from "@components/footer/Footer";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Menu from "@components/menu/Menu";

const AppContent = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Menu />
      </main>
      <Footer />
    </>
  );
};

export default AppContent;
