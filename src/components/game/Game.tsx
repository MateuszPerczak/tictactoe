import styled from "@emotion/styled";
import { motion, type MotionStyle, type Variants } from "framer-motion";

import StyledGame from "./Game.styles";

const StyledBoard = styled(motion.div)`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  background-color: ${({ theme: { background } }): string => background};
  position: relative;
  overflow: hidden;
`;

type Orientation = "horizontal" | "vertical";

const Line = ({
  orientation,
  position,
}: {
  orientation: Orientation;
  position: string;
}): JSX.Element => {
  const thickness = 4;

  const widthMapper: Record<Orientation, MotionStyle> = {
    horizontal: { width: "100%", height: thickness },
    vertical: { width: thickness, height: "100%" },
  };

  const positionMapper: Record<Orientation, MotionStyle> = {
    horizontal: { top: position, left: 0 },
    vertical: { top: 0, left: position },
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        background: "#fff",
        ...widthMapper[orientation],
        ...positionMapper[orientation],
      }}
    />
  );
};

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
  const boardVariant: Variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", duration: 0.2, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <StyledGame layout variants={animationVariant}>
      <StyledBoard layout variants={boardVariant}>
        <Line orientation="horizontal" position="33%" />
        <Line orientation="horizontal" position="66%" />
        <Line orientation="vertical" position="33%" />
        <Line orientation="vertical" position="66%" />
      </StyledBoard>
    </StyledGame>
  );
};

export default Game;
