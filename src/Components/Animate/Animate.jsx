import styled from "@emotion/styled";

const StylesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${({ type }) => {
      return type;
    }}
    ${({ duration }) => {
      return duration;
    }}s
    ease-out
    ${({ delay }) => {
      return delay;
    }}s
    both
    ${({ infinite }) => {
      return infinite ? "infinite" : "";
    }};

  animation-play-state: ${({ animate }) => {
    return animate ? "running" : "paused";
  }};

  @keyframes scale {
    0% {
      transform: scale(0);
    }
    70% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes slide {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

const Animate = ({
  children,
  delay = 0,
  duration = 0,
  type,
  animate = true,
  infinite = false,
}) => {
  return (
    <StylesWrapper
      delay={delay}
      duration={duration}
      type={type}
      animate={animate}
      infinite={infinite}
    >
      {children}
    </StylesWrapper>
  );
};

export default Animate;
