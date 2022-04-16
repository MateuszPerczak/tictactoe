import styled from "@emotion/styled";

const StylesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  @keyframes hover {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0%);
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

  @keyframes puff {
    0% {
      transform: scale(10);
      filter: blur(20px);
      opacity: 0;
    }
    90% {
      transform: scale(0.9);
      filter: blur(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      filter: blur(0);
      opacity: 1;
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
  animateGroup = false,
  step = 0.5,
}) => {
  return children.length && animateGroup ? (
    children.map((child, index) => {
      return (
        <Animate
          delay={delay + step * (index + 1)}
          duration={duration}
          type={type}
          key={index}
        >
          {child}
        </Animate>
      );
    })
  ) : (
    <StylesWrapper
      delay={delay}
      duration={duration}
      type={type}
      animate={animate}
      infinite={infinite}
      animateGroup={animateGroup}
    >
      {children}
    </StylesWrapper>
  );
};

export default Animate;
