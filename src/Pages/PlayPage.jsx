import { useState } from "react";
import Page from "../Components/Page/Page";
import Animate from "../Components/Animate/Animate";
import Board from "../Components/Board/Board";
import Button from "../Components/Button/Button";
import Logo from "../Components/Logo/Logo";
import Header from "../Components/Header/Header";
import TextSeperator from "../Components/Text/TextSeperator";
import styled from "@emotion/styled";

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const PlayPage = ({ setPage }) => {
  return (
    <Page>
      <Animate duration={0.3} type="slide" animateGroup step={0.2}>
        <Logo />
        <Header header="TicTacToe" description="Never gona give u up" />
        <TextSeperator space={2} />
        <Board />
        <TextSeperator space={2} />
      </Animate>
      <Animate delay={1} duration={0.3} type="slide">
        <ButtonsWrapper>
          <Button icon="&#xE76B;" text="Back" onClick={() => setPage("main")} />
          <Button icon="&#xE149;" text="Restart" />
        </ButtonsWrapper>
      </Animate>
    </Page>
  );
};

export default PlayPage;
