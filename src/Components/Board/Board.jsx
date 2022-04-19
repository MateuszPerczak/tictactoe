import styled from "@emotion/styled";
import Rect from "./Rect";

import HorizontalLine from "../Line/HorizontalLine";
import VerticalLine from "../Line/VerticalLine";
import Winner from "./Winner";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px;
  align-items: center;
  @media (max-width: 500px) {
    width: 370px;
    height: 370px;
  }
  @media (max-width: 400px) {
    width: 250px;
    height: 250px;
  }
  width: 400px;
  height: 400px;
  transition: width 0.3s, height 0.3s;
  backdrop-filter: blur(5px);
`;

const Board = ({ board, winner, onClick }) => {
  return (
    <StyledBoard>
      {board ? (
        <>
          <HorizontalLine offset={33} />
          <HorizontalLine offset={66} />
          <VerticalLine offset={33} />
          <VerticalLine offset={66} />
          {board.map((player, index) => {
            return (
              <Rect
                key={index}
                player={player}
                onClick={() => {
                  onClick(index);
                }}
              />
            );
          })}
        </>
      ) : (
        <Winner winner={winner} />
      )}
    </StyledBoard>
  );
};

export default Board;
