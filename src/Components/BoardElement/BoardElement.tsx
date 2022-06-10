import type { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

const StyledElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  transition: color 200ms, background-color 200ms;
  background-color: #212121;
  &:hover {
    cursor: pointer;
    background-color: #252525aa;
    color: #fff;
  }
  &:active {
    background-color: #212121aa;
  }
`;

type ElementProps = PropsWithChildren<{
  onClick: Function;
}>;

const BoardElement: FC<ElementProps> = ({
  children,
  onClick,
}: ElementProps): JSX.Element => {
  return <StyledElement onClick={onClick}>{children}</StyledElement>;
};

export default BoardElement;
