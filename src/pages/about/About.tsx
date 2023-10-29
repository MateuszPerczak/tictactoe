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
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type specimen
        book."
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
