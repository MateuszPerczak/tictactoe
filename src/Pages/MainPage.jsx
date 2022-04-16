import styled from "@emotion/styled";
import Page from "../Components/Page/Page";
import Animate from "../Components/Animate/Animate";
import Header from "../Components/Header/Header";
import Logo from "../Components/Logo/Logo";
import Button from "../Components/Button/Button";

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const MainPage = ({ setPage }) => {
  return (
    <Page>
      <Animate delay={0.5} duration={0.3} type="puff">
        <Logo />
        <Header header="TicTacToe" />
      </Animate>
      <ButtonsWrapper>
        <Animate delay={0.5} duration={0.2} type="puff" animateGroup step={0.1}>
          <Button
            icon="&#xE102;"
            text="PLAY"
            onClick={() => {
              setPage("play");
            }}
          />
          <Button
            icon="&#xE946;"
            text="ABOUT"
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
