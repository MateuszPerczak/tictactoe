import { useSpring, animated } from "react-spring";
import Page from "../Components/Page/Page";
import Header from "../Components/Header/Header";
import Icon from "../Components/Icon/Icon";
import Text from "../Components/Text/Text";
import Button from "../Components/Button/Button";
import Link from "../Components/Link/Link";
import Library from "../Components/Library/Library";
import LibraryWrapper from "../Components/Library/LibraryWrapper";
import type { FC } from "react";

const About: FC = (): JSX.Element => {
  const content = useSpring({
    from: { opacity: 0, transform: "translateY(200%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
    config: { tension: 250 },
  });

  return (
    <Page>
      <animated.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          ...content,
        }}
      >
        <Icon fontSize={5}>&#xE946;</Icon>
        <Header fontSize={5}>About</Header>
        <Header fontSize={2}>Used libraries:</Header>
        <LibraryWrapper>
          <Library>React</Library>
          <Library>Emotion</Library>
          <Library>react-spring</Library>
          <Library>react-router-dom</Library>
        </LibraryWrapper>
        <Header fontSize={2}>Used icons:</Header>
        <Library>Microsoft Fluent UI Icons</Library>
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
