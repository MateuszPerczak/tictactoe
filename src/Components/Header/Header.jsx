import styled from "@emotion/styled";

const StylesWrapper = styled.div`
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Header = ({ header }) => {
  return <StylesWrapper>{header}</StylesWrapper>;
};

export default Header;
