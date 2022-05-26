import { memo } from "react";
import styled from "@emotion/styled";

type TextProps = {
  fontSize?: number;
};

const Text = styled.span<TextProps>`
  line-height: 0.5;
  padding-top: 3px;
  font-size: ${({ fontSize }) => {
    return fontSize ? fontSize : "2";
  }}rem;
`;

export default memo(Text);
