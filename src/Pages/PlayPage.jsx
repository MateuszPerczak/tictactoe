import { useState, useMemo } from "react";
import Page from "../Components/Page/Page";
import Animate from "../Components/Animate/Animate";
import Game from "../Components/Game/Game";
import Button from "../Components/Button/Button";
import Logo from "../Components/Logo/Logo";
import Header from "../Components/Header/Header";
import TextSeperator from "../Components/Text/TextSeperator";
import { getQuote } from "../Hooks/quoteHelper";
import styled from "@emotion/styled";

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const PlayPage = ({ setPage }) => {
  const [restart, setRestart] = useState(false);
  const quote = useMemo(() => getQuote(), []);

  return (
    <Page>
      <Animate duration={0.3} type="slide" animateGroup step={0.1} flex>
        <Logo />
        <Header header="TicTacToe" description={quote} />
        <TextSeperator space={2} />
        <Game restart={restart} />
        <TextSeperator space={2} />
        <ButtonsWrapper>
          <Button icon="&#xE76B;" text="Back" onClick={() => setPage("main")} />
          <Button
            icon="&#xE149;"
            text="Restart"
            onClick={() => setRestart(!restart)}
          />
        </ButtonsWrapper>
      </Animate>
    </Page>
  );
};

export default PlayPage;
