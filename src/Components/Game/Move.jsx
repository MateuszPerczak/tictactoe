import styled from "@emotion/styled";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import Animate from "../Animate/Animate";

const StyledMove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 2.1rem;
`;

const Move = ({ player }) => {
  const icons = {
    X: "\uEF2C",
    O: "\uED66",
  };

  return (
    <StyledMove>
      <Text text="Now" />
      <Animate duration={3} type="hover" infinite>
        <Icon icon={icons[player]} size={1.2} bold={player === "O"} />
      </Animate>
      <Text text="Turn!" />
    </StyledMove>
  );
};

export default Move;
