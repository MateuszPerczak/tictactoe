import styled from "@emotion/styled";
import { useState } from "react";

const StylesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 400px;
  height: 400px;
  background: #252525;
  border-radius: 8px;
  border: 1px solid #3b3b3b;
  padding: 10px;
`;

const Bord = () => {
  const [board, setBoard] = useState([]);
  const [player, setPlayer] = useState("X");

  return (
    <>
      <StylesWrapper>
        <span>{player}</span>
      </StylesWrapper>
    </>
  );
};

export default Bord;

{
  /* <Style>
        <Text>Now</Text>
        {player === "X" ? (
          <Icon icon="&#xEF2C;" />
        ) : (
          <Icon icon="&#xED66;" bold />
        )}
        <Text>turn!</Text>
      </Style> */
}
