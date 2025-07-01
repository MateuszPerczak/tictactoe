import { getUniqueId } from "@helpers/getUniqueId";
import { useCallback, useMemo, useState } from "react";

import type { Board, GameProps, GameState } from "./useGame.types";

const useGame = (props: GameProps) => {
  const initialState = useMemo(
    (): GameState => ({
      board: Array.from({ length: 9 }, () => null),
      currentPlayer: "X",
      mode: props.mode,
    }),
    [props.mode],
  );

  const [state, setState] = useState<GameState>(() => initialState);

  const resetGame = useCallback(() => setState(() => initialState), []);

  const insertPlayer = (gameState: GameState, tileIndex: number) => {
    const board: Board = [...gameState.board];
    let currentPlayer = gameState.currentPlayer;

    for (let index = 0; index < board.length; index++) {
      const tile = board.at(index);
      if (tile === undefined) {
        continue;
      }
      if (tileIndex === index && tile === null) {
        console.log("pre", currentPlayer);
        board[index] = currentPlayer;
        currentPlayer = currentPlayer === "O" ? "X" : "O";
        console.log("after", currentPlayer);
      }
    }

    return { ...gameState, board, currentPlayer } as const;
  };

  const onTileClick = useCallback(
    (tileIndex: number) =>
      setState((prevState) => {
        // check if index is within the range
        if (!(tileIndex <= 8 && tileIndex >= 0)) {
          return prevState;
        }

        if (prevState.mode === "withAlgorithm") {
          return {
            ...prevState,
          };
        }

        if (prevState.mode === "withFriend") {
          const updatedState = insertPlayer(prevState, tileIndex);
          console.log("u", updatedState);
          return updatedState;
        }

        return {
          ...prevState,
        };
      }),
    [],
  );

  return {
    gameState: {
      canResetGame: state.board.every((value) => value === null),
      board: state.board,
    },
    gameApi: {
      resetGame,
      onTileClick,
    },
  };
};

export default useGame;
