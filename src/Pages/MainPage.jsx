import styled from "@emotion/styled";
import Page from "../Components/Page/Page";
import Animate from "../Components/Animate/Animate";
import Header from "../Components/Header/Header";
import Logo from "../Components/Logo/Logo";
import Button from "../Components/Button/Button";
import TextSeperator from "../Components/Text/TextSeperator";

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 25vw;
`;

const MainPage = ({ setPage }) => {
  return (
    <Page>
      <Animate duration={0.3} type="slide">
        <Logo />
        <Header header="TicTacToe" description="By: Mateusz Perczak" />
        <TextSeperator />
      </Animate>
      <ButtonsWrapper>
        <Animate
          delay={0.1}
          duration={0.4}
          type="slide"
          animateGroup
          step={0.1}
          flex
        >
          <Button
            icon="&#xE102;"
            text="Play"
            onClick={() => {
              setPage("play");
            }}
          />
          <Button
            icon="&#xE946;"
            text="About"
            onClick={() => {
              setPage("about");
            }}
          />
        </Animate>
      </ButtonsWrapper>
    </Page>
  );
};

export default MainPage;
