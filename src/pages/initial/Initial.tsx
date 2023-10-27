import Button from "@components/button/Button";
import { Icons } from "@components/icon/Icon.types";
import type { PagesProps } from "@components/menu/Menu.types";
import Page from "@components/page/Page";
import type { Variants } from "framer-motion";
import { memo } from "react";

const Initial = ({ setPage }: PagesProps): JSX.Element => {
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
        onClick={(): void => setPage("play")}
        variants={animationVariant}
      />
      <Button
        icon={Icons.Info}
        label="About"
        description="Learn more about this project!"
        onClick={(): void => setPage("about")}
        variants={animationVariant}
      />
    </Page>
  );
};

export default memo(Initial);
