import Page from "../Components/Page/Page";
import Animate from "../Components/Animate/Animate";
import Board from "../Components/Board/Board";
import Button from "../Components/Button/Button";
import Logo from "../Components/Logo/Logo";
import Header from "../Components/Header/Header";

const PlayPage = ({ setPage }) => {
  return (
    <Page>
      <Animate delay={0.1} duration={0.4} type="slide">
        <Logo />
        <Header header="TicTacToe" />
      </Animate>
      <Animate delay={0.2} duration={0.5} type="slide">
        <Board />
      </Animate>
      <Animate delay={0.3} duration={0.5} type="slide">
        <Button icon="&#xEA8A;" onClick={() => setPage("main")} />
      </Animate>
    </Page>
  );
};

export default PlayPage;
