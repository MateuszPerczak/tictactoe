import styled from "@emotion/styled";
import type { FC } from "react";
import Text from "../Text/Text";
import BoardElement from "../BoardElement/BoardElement";
import Icon from "../Icon/Icon";
import { useSpring, animated } from "react-spring";

const StyledBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(50vh, 90vw);
  height: min(50vh, 90vw);
  border-radius: 30px;
  border: 2px solid #333;
  backdrop-filter: blur(8px) saturate(180%);
  overflow: hidden;
`;

const StyledArea = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
  width: 100%;
  height: 100%;
  background-color: #333;
  z-index: 1;
`;

const StyledWinner = styled(animated.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

type BoardProps = {
  board: Array<string>;
  handleClick: Function;
  winner: string;
};

const Board: FC<BoardProps> = ({
  board,
  handleClick,
  winner,
}: BoardProps): JSX.Element => {
  const playerToIcon: { [key: string]: string } = {
    X: "\uEF2C",
    O: "\uED66",
    XO: "\uE899",
  };

  const winnerAnimation = useSpring({
    opacity: `${winner === "" ? 0 : 1}`,
    display: `${winner === "" ? "none" : "flex"}`,
    transform: `translateY(${winner === "" ? "100%" : "0%"})`,
  });

  const boardAnimation = useSpring({
    opacity: `${winner === "" ? 1 : 0.1}`,
  });

  return (
    <StyledBoard>
      <StyledArea style={boardAnimation}>
        {board.map((player, index) => {
          return (
            <BoardElement key={index} onClick={() => handleClick(index)}>
              <Icon fontSize={4} bold={player === "O" ? true : false}>
                {playerToIcon[player]}
              </Icon>
            </BoardElement>
          );
        })}
      </StyledArea>
      <StyledWinner style={winnerAnimation}>
        <Icon fontSize={5}>{playerToIcon[winner]}</Icon>
        <Text fontSize={4}>{winner === "XO" ? "Draw!" : "Wins!"}</Text>
      </StyledWinner>
    </StyledBoard>
  );
};

export default Board;

// &#xED66; circle
// &#xEF2C; cross
