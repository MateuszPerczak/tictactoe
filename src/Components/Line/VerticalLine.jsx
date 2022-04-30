import styled from "@emotion/styled";

const StyleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0%;
  left: ${({ offset }) => {
    return `${offset}%`;
  }};
  height: 100%;
  width: 4px;
`;

const StyledLine = styled.div`
  width: 4px;
  height: 0%;
  background: #fff;
  border-radius: 16px;
  animation: height 0.3s both 0.1s;

  @keyframes height {
    0% {
      height: 0%;
    }
    100% {
      height: 100%;
    }
  }
`;

const VerticalLine = ({ offset }) => {
  return (
    <StyleWrapper offset={offset}>
      <StyledLine />
    </StyleWrapper>
  );
};

export default VerticalLine;
