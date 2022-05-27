import type { FC } from "react";
import { useSpring, animated } from "react-spring";
import Page from "../Components/Page/Page";
import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";
import Text from "../Components/Text/Text";
import Icon from "../Components/Icon/Icon";

const Play: FC = (): JSX.Element => {
  const header = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200 },
    delay: 500,
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
        <Header fontSize={4}>Play</Header>
        <Button to="/">
          <Icon>&#xE00E;</Icon>
          <Text>Back</Text>
        </Button>
      </animated.div>
    </Page>
  );
};

export default Play;
