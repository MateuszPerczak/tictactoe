import { Avatar } from "@components/avatar/Avatar";
import Button from "@components/button/Button";
import { Icons } from "@components/icon/Icon.types";
import { ImageLabel } from "@components/ImageLabel/ImageLabel";
import Label from "@components/label/Label";
import Page from "@components/page/Page";
import type { RenderProps } from "@components/pageRenderer/PageRenderer.types";

import type { Pages } from "../pages";
import { aboutAnimationVariant } from "./About.animation";

const About = ({ goBack }: RenderProps<Pages>): JSX.Element => {
  return (
    <Page width={400}>
      <Label
        label="About"
        description="In brief, this is a second version of TicTacToe. It comes with a lots of improvements under the hood.
        Mainly react-spring was replaced with framer-motion, and now the whole project uses Vite.
        I spend lots of time tweaking and making the animations smooth and beautiful."
        variants={aboutAnimationVariant}
      />
      <Label
        label="Libraries"
        description="Vite, React, Framer-motion, Emotion"
        variants={aboutAnimationVariant}
      />
      <ImageLabel
        image={<Avatar url="./images/avatar.png" />}
        label="Made by"
        description="SpaceFox 🌌"
        variants={aboutAnimationVariant}
      />
      <Button
        icon={Icons.Back}
        label="Go back"
        onClick={goBack}
        variants={aboutAnimationVariant}
      />
    </Page>
  );
};

export default About;
