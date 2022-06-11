import type {
  ClassAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import styled, { Interpolation } from "@emotion/styled";
import type { Theme } from "@emotion/react";

const StyledElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: color 200ms, background-color 200ms;
  background-color: #212121;
  &:hover {
    cursor: pointer;
    background-color: #252525;
  }
  &:active {
    background-color: #212121;
  }
`;

type ElementProps = PropsWithChildren<
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> & {
      css?: Interpolation<Theme>;
    }
>;

const BoardElement: FC<ElementProps> = ({
  ...rest
}: ElementProps): JSX.Element => {
  return <StyledElement {...rest} />;
};

export default BoardElement;
