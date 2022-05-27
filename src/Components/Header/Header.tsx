import styled from "@emotion/styled";
import type { FC, PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  fontSize?: number;
}>;

const Header: FC<HeaderProps> = styled.span<HeaderProps>`
  font-size: ${({ fontSize }: HeaderProps) => {
    return fontSize ? fontSize : "1.5";
  }}rem;
  font-weight: bold;
  line-height: 1;
`;
export default Header;
