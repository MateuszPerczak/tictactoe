export const updateBoard = (
  setBoard: Function,
  index: number,
  player: string
): void => {
  setBoard((board: Array<string>) => {
    const newBoard = [...board];
    newBoard[index] = player;
    return newBoard;
  });
};

export const updatePlayer = (setPlayer: Function): void => {
  setPlayer((player: string) => {
    return player === "X" ? "O" : "X";
  });
};

export const checkWinners = (board: Array<string>, moves: number): string => {
  const winningCombinations: Array<Array<number>> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return moves === 9 ? "XO" : "";
};
