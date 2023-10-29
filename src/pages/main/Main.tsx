import Button from "@components/button/Button";
import Game from "@components/game/Game";
import { Icons } from "@components/icon/Icon.types";
import Page from "@components/page/Page";
import type { RenderProps } from "@components/pageRenderer/PageRenderer.types";
import type { Variants } from "framer-motion";

import type { Pages } from "../pages";

const Main = ({ goBack }: RenderProps<Pages>): JSX.Element => {
  const animationVariant: Variants = {
    initial: {
      opacity: 0,
      y: 70,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <Page width={800}>
      <Game />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          flex: "1 0 70px",
          gap: 10,
        }}
      >
        <Button
          icon={Icons.Back}
          label="Go back"
          onClick={goBack}
          variants={animationVariant}
        />
        <Button
          icon={Icons.Refresh}
          label="Restart"
          justifyContent="center"
          variants={animationVariant}
        />
        <Button
          icon={Icons.Color}
          label="Test"
          justifyContent="center"
          variants={animationVariant}
        />
      </div>
    </Page>
  );
};

export default Main;
