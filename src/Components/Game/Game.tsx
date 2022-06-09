import type { FC } from "react";
import { useState } from "react";
import Board from "../Board/Board";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";

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
    delay: 200,
  });

  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");

  const handleClick = (index: number) => {
    if (board[index] === "") {
      setBoard((oldBoard) => {
        const newBoard = [...oldBoard];
        newBoard[index] = player;
        return newBoard;
      });
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  const playerToIcon = {
    X: "\uEF2C",
    O: "\uED66",
    XO: "\uF1AD",
  };

  return (
    <>
      <StyledPanel style={content}>
        <Text>Now</Text>
        <Icon bold={player === "O" ? true : false}>{playerToIcon[player]}</Icon>
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
