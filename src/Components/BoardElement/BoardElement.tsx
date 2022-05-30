import type { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

const StyledElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  &:hover {
    cursor: pointer;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

type ElementProps = PropsWithChildren<Record<string, unknown>>;

const BoardElement: FC<ElementProps> = ({
  children,
}: ElementProps): JSX.Element => {
  return <StyledElement>{children}</StyledElement>;
};

export default BoardElement;
