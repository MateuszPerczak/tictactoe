import styled from "@emotion/styled";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Logo = (): JSX.Element => {
  return (
    <StyledLogo>
      <StyledIcons>
        <Icon fontSize={4}>&#xEF2C;</Icon>
        <Icon fontSize={4} bold>
          &#xED66;
        </Icon>
      </StyledIcons>
      <Header fontSize={6}>TicTacToe</Header>
    </StyledLogo>
  );
};

export default Logo;
