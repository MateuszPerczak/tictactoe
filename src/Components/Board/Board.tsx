import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import type { FC } from "react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(50vh, 90vw);
  height: min(50vh, 90vw);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  border: 2px solid #fff;
  gap: 10px;
`;

const Board: FC = (): JSX.Element => {
  const wrench = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(5deg)" },
    config: { tension: 100, mass: 4, friction: 0 },
    delay: 600,
  });

  return (
    <StyledBoard>
      <animated.div style={wrench}>
        <Icon fontSize={5}>&#xE15E;</Icon>
      </animated.div>
      <Text>The game is still in development</Text>
      <Text>Maybe check in a few hours!</Text>
    </StyledBoard>
  );
};

export default Board;
