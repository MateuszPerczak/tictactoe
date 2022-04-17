import styled from "@emotion/styled";
import Rect from "./Rect";
import Winner from "./Winner";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
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
  border: 2px solid #fff;
  border-radius: 16px;
  transition: width 0.3s, height 0.3s;
  backdrop-filter: blur(5px);
`;

const Board = ({ board, winner, onClick }) => {
  return (
    <StyledBoard>
      {board ? (
        board.map((player, index) => {
          return (
            <Rect
              key={index}
              player={player}
              onClick={() => {
                onClick(index);
              }}
            />
          );
        })
      ) : (
        <Winner winner={winner} />
      )}
    </StyledBoard>
  );
};

export default Board;
