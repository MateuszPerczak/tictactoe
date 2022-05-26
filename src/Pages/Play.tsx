import type { FC } from "react";
import { useSpring, animated } from "react-spring";
import Page from "../Components/Page/Page";
import Header from "../Components/Header/Header";

const Play: FC = (): JSX.Element => {
  const header = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200 },
    delay: 500,
  });

  return (
    <Page>
      <animated.div style={header}>
        <Header fontSize={4}>Play</Header>
      </animated.div>
    </Page>
  );
};

export default Play;
