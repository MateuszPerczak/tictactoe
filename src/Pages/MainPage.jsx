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
      <Animate delay={0.5} duration={0.3} type="scale">
        <Logo />
        <Header header="TicTacToe" />
      </Animate>
      <ButtonsWrapper>
        <Animate delay={0.7} duration={0.5} type="slide">
          <Button
            icon="&#xF5B0;"
            text="PLAY"
            onClick={() => {
              setPage("play");
            }}
          />
        </Animate>
        <Animate delay={1} duration={0.5} type="slide">
          <Button
            icon="&#xF167;"
            text="INFO"
            onClick={() => {
              setPage("info");
            }}
          />
        </Animate>
      </ButtonsWrapper>
    </Page>
  );
};

export default MainPage;
