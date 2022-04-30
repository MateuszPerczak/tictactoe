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
    ease-in-out
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
  // import proper animation
  import(`./animations/${type}.scss`);

  return children?.length && animateGroup ? (
    children.map((child, index) => {
      return (
        <Animate
          delay={delay + step * (index + 1)}
          duration={duration}
          type={type}
          key={index}
          infinite={infinite}
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
      className="animate"
    >
      {children}
    </StylesWrapper>
  );
};

export default Animate;
