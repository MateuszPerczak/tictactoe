import styled from "@emotion/styled";
import type { FC } from "react";
// import Icon from "../Icon/Icon";
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

type BoardProps = {
  board: Array<string>;
  handleClick: Function;
  playerToIcon: { [key: string]: string };
};

const Board: FC<BoardProps> = ({
  board,
  handleClick,
  playerToIcon,
}: BoardProps): JSX.Element => {
  return (
    <StyledBoard>
      {board.map((value, key) => {
        return (
          <BoardElement key={key} onClick={() => handleClick(key)}>
            <Icon fontSize={5} bold={value === "O" ? true : false}>
              {playerToIcon[value]}
            </Icon>
          </BoardElement>
        );
      })}
    </StyledBoard>
  );
};

export default Board;

// &#xED66; circle
// &#xEF2C; cross
