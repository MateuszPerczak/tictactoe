import type { FC } from "react";
import { useState } from "react";
import Board from "../Board/Board";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import styled from "@emotion/styled";

const StyledPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const Game: FC = (): JSX.Element => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");

  return (
    <>
      <StyledPanel>
        <Text>Now</Text>
        <Icon>&#xEF2C;</Icon>
        <Text>turn!</Text>
      </StyledPanel>
      <Board board={board} setBoard={setBoard} />
      <StyledPanel>
        <Button to="/">
          <Icon>&#xE10F;</Icon>
          <Text>Back</Text>
        </Button>
        <Button to="">
          <Icon>&#xE72C;</Icon>
          <Text>Restart</Text>
        </Button>
      </StyledPanel>
    </>
  );
};

export default Game;
