import styled from "@emotion/styled";
import { FC, useState } from "react";

const StyledBoard = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 33%);
  overflow: hidden;
  width: min(50vh, 90vw);
  height: min(50vh, 90vw);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  border: 2px solid #fff;
`;

const StyledSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  width: auto;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const Board: FC = (): JSX.Element => {
  const [board, _] = useState(Array(9).fill(""));

  return (
    <StyledBoard>
      {board.map((square) => {
        return <StyledSquare>{square}</StyledSquare>;
      })}
    </StyledBoard>
  );
};

export default Board;
