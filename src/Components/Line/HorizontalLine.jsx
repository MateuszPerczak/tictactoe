import styled from "@emotion/styled";

const StyleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0%;
  top: ${({ offset }) => {
    return `${offset}%`;
  }};
  height: 4px;
  width: 100%;
`;

const StyledLine = styled.div`
  height: 4px;
  background: #fff;
  width: 0%;
  animation: width 0.3s both 1s;
  border-radius: 16px;

  @keyframes width {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

const HorizontalLine = ({ offset }) => {
  return (
    <StyleWrapper offset={offset}>
      <StyledLine />
    </StyleWrapper>
  );
};

export default HorizontalLine;
