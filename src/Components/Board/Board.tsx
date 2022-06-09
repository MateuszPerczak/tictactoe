import styled from "@emotion/styled";
import type { FC } from "react";
import Text from "../Text/Text";
import BoardElement from "../BoardElement/BoardElement";
import Icon from "../Icon/Icon";

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  overflow: hidden;
  width: min(50vh, 90vw);
  height: min(50vh, 90vw);
  backdrop-filter: blur(8px) saturate(180%);
  border-radius: 30px;
  border: 2px solid #fff;
`;

const StyledWinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
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
    XO: "\uF1AD",
  };

  return (
    <StyledBoard>
      {winner === "" ? (
        board.map((player, key) => {
          return (
            <BoardElement key={key} onClick={() => handleClick(key)}>
              <Icon fontSize={5} bold={player === "O" ? true : false}>
                {playerToIcon[player]}
              </Icon>
            </BoardElement>
          );
        })
      ) : (
        <StyledWinner>
          <Icon fontSize={4}>&#xEF2C;</Icon>
          <Text fontSize={4}>Wins!</Text>
        </StyledWinner>
      )}
    </StyledBoard>
  );
};

export default Board;

// &#xED66; circle
// &#xEF2C; cross
