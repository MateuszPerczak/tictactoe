import type { IconProps, Icons } from "@components/icon/Icon.types";

export type GameState = {
  board: Board;
  currentPlayer: "X" | "O";
};

export type Board = BoardElement[];

export type BoardElement = {
  disabled: boolean;
  iconProps: IconProps | null;
  value: string | null;
};
