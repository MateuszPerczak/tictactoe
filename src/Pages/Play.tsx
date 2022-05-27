import type { FC } from "react";
import { useSpring, animated } from "react-spring";
import Page from "../Components/Page/Page";
import Button from "../Components/Button/Button";
import Text from "../Components/Text/Text";
import Icon from "../Components/Icon/Icon";
import Logo from "../Components/Logo/Logo";
import Board from "../Components/Board/Board";
import styled from "@emotion/styled";

const StyledPanel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
`;

const Play: FC = (): JSX.Element => {
  const header = useSpring({
    from: { opacity: 0, transform: "scale(2)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 400 },
    delay: 200,
  });

  return (
    <Page>
      <animated.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          ...header,
        }}
      >
        <Logo />
        <Board />
        <StyledPanel>
          <Button to="/">
            <Icon>&#xE10F;</Icon>
            <Text>Back</Text>
          </Button>
          <Button to="">
            <Icon>&#xE72C;</Icon>
            <Text>Restart</Text>
          </Button>
        </StyledPanel>
      </animated.div>
    </Page>
  );
};

export default Play;
