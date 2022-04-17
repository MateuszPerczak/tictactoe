import { useState, useEffect } from "react";
import Board from "../Board/Board";
import Move from "./Move";
import {
  restartGame,
  checkWinner,
  showWinner,
  togglePlayer,
} from "../../Hooks/gameHelper";

const Game = ({ restart }) => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [moves, setMoves] = useState(0);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const handleClick = (index) => {
    if (board[index] === "") {
      let newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      togglePlayer(player, setPlayer);
      setMoves(moves + 1);
    }
  };

  useEffect(() => {
    setBoard(null);
    setTimeout(() => {
      restartGame(setBoard, setPlayer, setWinner, setMoves);
    }, 10);
  }, [restart]);

  useEffect(() => {
    if (moves === 9) {
      setTimeout(() => {
        showWinner("", setWinner, setBoard);
      }, 100);
    }
  }, [moves]);

  useEffect(() => {
    if (board) {
      let result = checkWinner(board);
      if (result !== "") {
        setTimeout(() => {
          showWinner(result, setWinner, setBoard);
        }, 100);
      }
    }
  }, [board]);

  return (
    <>
      <Move player={player} />
      <Board board={board} winner={winner} onClick={handleClick} />
    </>
  );
};

export default Game;
