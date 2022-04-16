import styled from "@emotion/styled";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import Animate from "../Animate/Animate";

const StyledWinner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 4rem;
  line-height: 1;
`;

const Winner = ({ winner }) => {
  const icons = {
    X: "\uEF2C",
    O: "\uED66",
    XO: "\uE899",
  };

  return (
    <StyledWinner>
      <Animate delay={0.2} duration={0.2} type="puff" animateGroup step={0.1}>
        <Icon icon={icons[winner]} size={5} bold={winner === "O"} />
        <Text text={winner === "XO" ? "Tie!" : "Wins!"} />
      </Animate>
    </StyledWinner>
  );
};

export default Winner;
