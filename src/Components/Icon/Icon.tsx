import type { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import type { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

type IconProps = {
  fontSize?: number;
  bold?: boolean;
};

type IconComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  } & IconProps,
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  Record<string, unknown>
>;

const Icon: IconComponent = styled.span<IconProps>`
  font-family: "Segoe Fluent Icons";
  font-size: ${({ fontSize }: IconProps) => {
    return fontSize ? fontSize : "1.5";
  }}rem;
  font-weight: ${({ bold }: IconProps) => {
    return bold ? "bold" : "normal";
  }};
`;

export default Icon;
