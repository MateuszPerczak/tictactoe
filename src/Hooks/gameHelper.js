export const showWinner = (winner, setWinner, setBoard) => {
  winner === "X" || winner === "O" ? setWinner(winner) : setWinner("XO");
  setBoard(null);
};

export const restartGame = (setBoard, setPlayer, setWinner, setMoves) => {
  setBoard(["", "", "", "", "", "", "", "", ""]);
  setPlayer("X");
  setWinner("XO");
  setMoves(0);
};

export const checkWinner = (board) => {
  const winningCombinations = [
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
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return "";
};

export const togglePlayer = (player, setPlayer) => {
  setPlayer(player === "X" ? "O" : "X");
};
