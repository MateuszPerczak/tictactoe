import styled from "@emotion/styled";

type HeaderProps = {
  fontSize?: number;
};

const Header = styled.span<HeaderProps>`
  font-size: ${({ fontSize }: HeaderProps) => {
    return fontSize ? fontSize : "1.5";
  }}rem;
  font-weight: bold;
  line-height: 1;
`;
export default Header;
