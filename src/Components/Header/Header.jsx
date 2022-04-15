import styled from "@emotion/styled";

const StylesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ size }) => {
    return size;
  }}rem;
  font-weight: 700;
  padding-top: 5px;
  line-height: 0.8;
`;

const DecsWrapper = styled.span`
  font-size: ${({ size }) => {
    return size / 3;
  }}rem;
`;

const Header = ({ header, description, size = 4 }) => {
  return (
    <StylesWrapper size={size}>
      {header}
      <DecsWrapper size={size}>{description}</DecsWrapper>
    </StylesWrapper>
  );
};

export default Header;
