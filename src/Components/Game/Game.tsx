import type { FC } from "react";
import { useState, useEffect } from "react";
import Board from "../Board/Board";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import styled from "@emotion/styled";
import { useSpring, animated, useTransition } from "react-spring";
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

  //

  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [moves, setMoves] = useState(0);
  const [allowMove, setAllowMove] = useState(true);
  const [winner, setWinner] = useState("");

  const handleClick = (index: number): void => {
    if (board[index] === "" && allowMove) {
      updateBoard(setBoard, index, player);
      updatePlayer(setPlayer);
      setMoves(moves + 1);
    }
  };

  useEffect(() => {
    const winner = checkWinners(board, moves);
    if (winner !== "") {
      setAllowMove(false);
      setTimeout(() => {
        setWinner(winner);
      }, 100);
    }
  }, [board, moves]);

  const move: { [key: string]: number } = {
    X: 0,
    O: 1,
  };

  const animatedMove = useTransition(player, {
    from: { transform: "scale(2)", opacity: 0 },
    enter: { transform: "scale(1)", opacity: 1 },
    leave: { transform: "scale(0)", opacity: 0 },
    config: {
      mass: 1,
      tension: 550,
      clamp: true,
    },
    keys: (item) => move[item],
    exitBeforeEnter: true,
  });

  return (
    <>
      <StyledPanel style={content}>
        <Text>Now</Text>
        {animatedMove((style, player) => {
          return (
            <animated.div style={style}>
              <Icon bold={player === "O" ? true : false}>
                {player === "X" ? "\uEF2C" : "\uED66"}
              </Icon>
            </animated.div>
          );
        })}

        {/* <animated.div style={{ ...animatedMove }}>
          <Icon bold={player === "O" ? true : false}>
            {player === "X" ? "\uEF2C" : "\uED66"}
          </Icon>
        </animated.div> */}
        <Text>turn!</Text>
      </StyledPanel>
      <Board board={board} handleClick={handleClick} winner={winner} />
      <StyledPanel>
        <Button to="/">
          <Icon>&#xE10F;</Icon>
          <Text>Back</Text>
        </Button>
        <Button
          to=""
          onClick={() => {
            setPlayer("X");
            setWinner("");
            setMoves(0);
            setAllowMove(true);
            setBoard(Array(9).fill(""));
          }}
        >
          <Icon>&#xE72C;</Icon>
          <Text>Restart</Text>
        </Button>
      </StyledPanel>
    </>
  );
};

export default Game;
