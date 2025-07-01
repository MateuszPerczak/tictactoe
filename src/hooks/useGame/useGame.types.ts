import type { IconProps } from "@components/icon/Icon.types";

export type GameProps = {
  mode: GameMode;
};

export type GameState = {
  mode: GameMode;
  board: Board;
  currentPlayer: "X" | "O";
};

export type GameMode = "withFriend" | "withAlgorithm";

export type Board = Tile[];

export type Tile = string | null;
