import { getUniqueId } from "@helpers/getUniqueId";
import { useMemo, useState } from "react";

import type { BoardElement, GameState } from "./useGame.types";

const useGame = () => {
  const initialState = useMemo(
    (): GameState => ({
      board: Array(9).fill({} as BoardElement),
      currentPlayer: "X",
    }),
    [],
  );

  const [state, setState] = useState<GameState>({
    board: Array(9).fill(null),
    currentPlayer: "X",
  });

  const reset = () =>
    setState({
      board: Array(9).fill(null),
      currentPlayer: "X",
    });

  const setBoard = (index: number) =>
    setState((prevState) => {
      let currentPlayer = prevState.currentPlayer;
      const board = [...prevState.board];
      if (board[index] === null) {
        board[index] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
      return {
        ...prevState,
        board,
        currentPlayer,
      };
    });

  return {
    game: {
      reset,
    },
    board: {
      state: state.board,
      setBoard,
    },
    currentPlayer: state.currentPlayer,
  } as const;
};

export default useGame;
