import type { FC } from "react";
import { useSpring, animated } from "react-spring";
import Page from "../Components/Page/Page";
import Logo from "../Components/Logo/Logo";
import Button from "../Components/Button/Button";
import Icon from "../Components/Icon/Icon";
import Text from "../Components/Text/Text";

const Main: FC = (): JSX.Element => {
  const header = useSpring({
    from: { opacity: 0, transform: "scale(0.94)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 400 },
    delay: 500,
  });

  const content = useSpring({
    from: { opacity: 0, transform: "scale(0.9)", height: "0%" },
    to: { opacity: 1, transform: "scale(1)", height: "15%" },
    config: { tension: 200 },
    delay: 1000,
  });

  return (
    <Page>
      <animated.div style={header}>
        <Logo />
      </animated.div>
      <animated.div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          ...content,
        }}
      >
        <Button to="/play">
          <Icon>&#xE102;</Icon>
          <Text>Play</Text>
        </Button>
        <Button to="/about">
          <Icon>&#xE946;</Icon>
          <Text>About</Text>
        </Button>
      </animated.div>
    </Page>
  );
};

export default Main;