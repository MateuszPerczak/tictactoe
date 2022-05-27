import { memo, FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

type TextProps = PropsWithChildren<{
  fontSize?: number;
}>;

const Text: FC<TextProps> = styled.span<TextProps>`
  line-height: 0.5;
  padding-top: 3px;
  font-size: ${({ fontSize }) => {
    return fontSize ? fontSize : "2";
  }}rem;
  text-overflow: ellipsis;
`;

export default memo(Text);
