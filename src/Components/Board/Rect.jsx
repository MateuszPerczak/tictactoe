import styled from "@emotion/styled";
import Icon from "../Icon/Icon";
import Animate from "../Animate/Animate";

const StyledRect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 33%;
  border-radius: 16px;
  transition: background 200ms, width 50ms, height 50ms;
  cursor: pointer;
  &:hover {
    background: #00000033;
  }
`;

const Rect = ({ player, onClick }) => {
  const icons = {
    X: "\uEF2C",
    O: "\uED66",
  };

  return (
    <StyledRect onClick={onClick}>
      <Animate duration={0.2} type="scale" animate={player !== ""}>
        <Icon icon={icons[player]} size={4} bold={player === "O"} />
      </Animate>
    </StyledRect>
  );
};

export default Rect;
