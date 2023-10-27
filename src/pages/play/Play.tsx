import Button from "@components/button/Button";
import { Icons } from "@components/icon/Icon.types";
import type { PagesProps } from "@components/menu/Menu.types";
import Page from "@components/page/Page";
import type { Variants } from "framer-motion";
import { memo } from "react";

const Play = ({ goBack, setPage }: PagesProps): JSX.Element => {
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
        icon={Icons.People}
        label="Play with friend"
        description="If u got one."
        onClick={(): void => setPage("main")}
        variants={animationVariant}
      />
      <Button
        icon={Icons.Robot}
        label="Play with AI"
        description="Actually it's just min max algorithm."
        onClick={(): void => setPage("main")}
        variants={animationVariant}
      />
      <Button
        icon={Icons.Play}
        label="Play with others"
        description="Coming soon."
        disabled
        variants={animationVariant}
      />
      <Button
        icon={Icons.Back}
        label="Go back"
        description="Nah bro let's go back."
        onClick={goBack}
        variants={animationVariant}
      />
    </Page>
  );
};

export default memo(Play);
