import styled from "@emotion/styled";

import Panel from "../../components/panel/Panel";

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  gap: 5px;
`;

const StyledField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  aspect-ratio: 1;
  background-color: ${({ theme: { background } }): string => background};
  border: 1px solid ${({ theme: { strokeRest } }): string => strokeRest};
`;

const Game = (): JSX.Element => {
  const board: string[] = ["X", "O", "X", "X", "S", "X", "O", "", ""];

  return (
    <Panel layoutId="game">
      <h1>Game</h1>
      <StyledBoard>
        {board.map((char, index) => (
          <StyledField key={index}>{char}</StyledField>
        ))}
      </StyledBoard>
    </Panel>
  );
};

export default Game;
