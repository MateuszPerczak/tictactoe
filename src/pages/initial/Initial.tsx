import Button from "@components/button/Button";
import { Icons } from "@components/icon/Icon.types";
import Page from "@components/page/Page";
import type { RenderProps } from "@components/pageRenderer/PageRenderer.types";
import type { Variants } from "framer-motion";

import type { Pages } from "../pages";

const Initial = ({ navigateTo }: RenderProps<Pages>): JSX.Element => {
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
      <Button
        icon={Icons.Play}
        label="Play"
        description="Let's goooooo."
        onClick={(): void => navigateTo("play")}
        variants={animationVariant}
      />
      <Button
        icon={Icons.Info}
        label="About"
        description="Learn more about this project!"
        onClick={(): void => navigateTo("about")}
        variants={animationVariant}
      />
    </Page>
  );
};

export default Initial;
