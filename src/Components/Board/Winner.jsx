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
    XO: "\uF1AD",
  };

  return (
    <StyledWinner>
      <Animate delay={0.2} duration={0.2} type="scale" animateGroup step={0.1}>
        <Animate delay={0.3} duration={1} type="win">
          <Icon icon={icons[winner]} size={5} bold={winner === "O"} />
        </Animate>
        <Text text={winner === "XO" ? "Tie!" : "Wins!"} />
      </Animate>
    </StyledWinner>
  );
};

export default Winner;
