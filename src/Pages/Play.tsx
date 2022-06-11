import type { FC } from "react";
import { useSpring, animated } from "react-spring";
import Page from "../Components/Page/Page";
import Logo from "../Components/Logo/Logo";
import Game from "../Components/Game/Game";

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
        <Game />
      </animated.div>
    </Page>
  );
};

export default Play;
