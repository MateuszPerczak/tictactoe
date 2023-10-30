import Button from "@components/button/Button";
import { Icons } from "@components/icon/Icon.types";
import Label from "@components/label/Label";
import Page from "@components/page/Page";
import type { RenderProps } from "@components/pageRenderer/PageRenderer.types";
import type { Variants } from "framer-motion";

import type { Pages } from "../pages";

const About = ({ goBack }: RenderProps<Pages>): JSX.Element => {
  const animationVariant: Variants = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <Page width={400}>
      <Label
        label="About"
        description={`In brief, this is a second version of TicTacToe. It comes with a lots of improvements under the hood.
          Mainly react-spring was replaced with framer-motion, and now the whole project uses Vite.
          I spend lots of time tweaking and making the animations smooth and beautiful.`}
        variants={animationVariant}
      />
      <Button
        icon={Icons.Back}
        label="Go back"
        onClick={goBack}
        variants={animationVariant}
      />
    </Page>
  );
};

export default About;
