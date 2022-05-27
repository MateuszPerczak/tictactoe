import styled, { StyledComponent } from "@emotion/styled";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";
import type { Theme } from "@emotion/react";
import type { ElementType, DetailedHTMLProps, HTMLAttributes, FC } from "react";

type LogoComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

type IconComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

const StyledLogo: LogoComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledIcons: IconComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Logo: FC = (): JSX.Element => {
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
