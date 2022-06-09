import type { FC } from "react";
import { useState, useEffect } from "react";
import Board from "../Board/Board";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { updateBoard, updatePlayer, checkWinners } from "../../Hooks/game";

const StyledPanel = styled(animated.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const Game: FC = (): JSX.Element => {
  const content = useSpring({
    from: { transform: "translateY(200%)" },
    to: { transform: "translateY(0%)" },
    config: { tension: 300 },
    delay: 500,
  });

  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [moves, setMoves] = useState(0);
  const [allowMove, setAllowMove] = useState(true);

  const handleClick = (index: number): void => {
    if (board[index] === "" && allowMove) {
      updateBoard(setBoard, index, player);
      updatePlayer(setPlayer);
      setMoves(moves + 1);
    }
  };

  const handleWin = (winner: string) => {
    alert(`${winner} won!`);
    setAllowMove(false);
  };

  useEffect(() => {
    const winner: string = checkWinners(board, moves);
    if (winner) {
      handleWin(winner);
    }
  }, [board]);

  // const resetGame = (): void => {
  //   setBoard(Array(9).fill(""));
  //   setPlayer("X");
  //   setMoves(1);
  //   setAllowMove(true);
  // };

  const playerToIcon = {
    X: "\uEF2C",
    O: "\uED66",
    XO: "\uF1AD",
  };

  return (
    <>
      <StyledPanel style={content}>
        <Text>Now</Text>
        <Icon bold={player === "O" ? true : false}>
          {player === "X" ? playerToIcon.X : playerToIcon.O}
        </Icon>
        <Text>turn!</Text>
      </StyledPanel>
      <Board
        board={board}
        handleClick={handleClick}
        playerToIcon={playerToIcon}
      />
      <StyledPanel>
        <Button to="/">
          <Icon>&#xE10F;</Icon>
          <Text>Back</Text>
        </Button>
        <Button
          to=""
          // onClick={() => {
          //   setBoard(Array(9).fill(""));
          //   setPlayer("X");
          // }}
        >
          <Icon>&#xE72C;</Icon>
          <Text>Restart</Text>
        </Button>
      </StyledPanel>
    </>
  );
};

export default Game;
