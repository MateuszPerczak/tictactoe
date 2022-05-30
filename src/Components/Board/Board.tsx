import styled from "@emotion/styled";
import type { FC } from "react";
// import Icon from "../Icon/Icon";
import BoardElement from "../BoardElement/BoardElement";

const StyledBoard = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(3, 33%);
  overflow: hidden;
  padding: 10px;
  width: min(50vh, 90vw);
  height: min(50vh, 90vw);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  border: 2px solid #fff;
`;

type BoardProps = {
  board: Array<string>;
  setBoard: Function;
};

const Board: FC<BoardProps> = ({
  board,
  setBoard,
}: BoardProps): JSX.Element => {
  // const [board, setBoard] = useState(Array(9).fill(""));

  // const [player, setPlayer] = useState("X");

  // const handleClick = (index: number): void => {
  //   if (board[index] === "") {
  //     const newBoard = [...board];
  //     newBoard[index] = player;
  //     setBoard(newBoard);
  //     changePlayer();
  //   }
  // };

  // const changePlayer = () => {
  //   setPlayer(player === "X" ? "O" : "X");
  // };

  return (
    <StyledBoard>
      {board.map((value, key) => {
        return <BoardElement key={key}>{value}</BoardElement>;
      })}
    </StyledBoard>
  );
};

export default Board;

// &#xED66; circle
// &#xEF2C; cross
