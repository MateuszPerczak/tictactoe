import styled from "@emotion/styled";
import { motion, type MotionStyle, type Variants } from "framer-motion";

import StyledGame from "./Game.styles";
import type { GameProps } from "./Game.types";
import Icon from "@components/icon/Icon";
import { Icons } from "@components/icon/Icon.types";

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  /* outline: 1px solid red; */
  aspect-ratio: 1;
  height: 100%;
  .board-square {
    display: grid;
    place-items: center;
    flex: 1;
    background-color: ${({ theme: { fillRest } }): string => fillRest};
    border-radius: 10px;
    transition: background-color 200ms;
  }
  .board-square:hover {
    background-color: ${({ theme: { fillHover } }): string => fillHover};
  }
  .board-square:active {
    background-color: ${({ theme: { fillActive } }): string => fillActive};
  }
`;

const Game = ({ setBoard, state }: GameProps): JSX.Element => {
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
      <StyledBoard>
        {state.map((value, index) => (
          <div
            key={`board-tile-${index}`}
            onClick={() => setBoard(index)}
            className="board-square"
          >
            {value === "X" && <Icon icon={Icons.Cross} size={64} />}
            {value === "O" && <Icon icon={Icons.Circle} size={64} bold />}
          </div>
        ))}
      </StyledBoard>
    </StyledGame>
  );
};

export default Game;
