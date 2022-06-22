import type { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import type { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

type BoardIconProperties = {
  bold?: boolean;
};

type BoardIconComponent = StyledComponent<
  {
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
  } & BoardIconProperties,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  {}
>;

const BoardIcon: BoardIconComponent = styled.div`
  font-family: "Segoe Fluent Icons";
  font-weight: ${({ bold }: BoardIconProperties) => {
    return bold ? "bold" : "normal";
  }};
  font-size: 7vmin;
`;

export default BoardIcon;
