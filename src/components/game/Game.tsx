import type { Variants } from "framer-motion";

import StyledGame from "./Game.styles";

const Game = (): JSX.Element => {
  const animationVariant: Variants = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { type: "tween", duration: 0.2, ease: "easeOut" },
    },
  };

  return <StyledGame layout variants={animationVariant}></StyledGame>;
};

export default Game;
