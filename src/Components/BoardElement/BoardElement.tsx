import type { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

const StyledElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  border-radius: 30px;
  transition: color 200ms, background-color 200ms;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #252525;
  }
  &:active {
    background-color: #212121;
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
