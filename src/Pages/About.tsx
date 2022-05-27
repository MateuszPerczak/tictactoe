import { useSpring, animated } from "react-spring";
import Page from "../Components/Page/Page";
import Header from "../Components/Header/Header";
import Icon from "../Components/Icon/Icon";
import Text from "../Components/Text/Text";
import Button from "../Components/Button/Button";
import Link from "../Components/Link/Link";
import type { FC } from "react";

const About: FC = (): JSX.Element => {
  const header = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200 },
    delay: 200,
  });

  const content = useSpring({
    from: { opacity: 0, transform: "scale(0.9)", height: "0px" },
    to: { opacity: 1, transform: "scale(1)", height: "410px" },
    config: { tension: 400 },
    delay: 600,
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
        <Icon fontSize={4}>&#xE946;</Icon>
        <Header fontSize={5}>About</Header>
      </animated.div>
      <animated.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          ...content,
        }}
      >
        <Header fontSize={2}>Used libraries:</Header>
        <Text fontSize={1.5}>
          React, Emotion, react-spring, react-router-dom
        </Text>
        <Header fontSize={2}>Used icons:</Header>
        <Text fontSize={1.5}>Microsoft Fluent UI Icons</Text>
        <Header fontSize={2}>Useful links:</Header>
        <Link href="https://github.com/MateuszPerczak/tictactoe">
          <Icon>&#xE167;</Icon>
          <Text>This project</Text>
        </Link>
        <Link href="https://github.com/MateuszPerczak">
          <Icon>&#xE167;</Icon>
          <Text>Github</Text>
        </Link>
        <Link href="https://mateuszperczak.github.io/">
          <Icon>&#xE12B;</Icon>
          <Text>Website</Text>
        </Link>
        <Button to="/">
          <Icon>&#xE10F;</Icon>
          <Text>Back</Text>
        </Button>
      </animated.div>
    </Page>
  );
};

export default About;
