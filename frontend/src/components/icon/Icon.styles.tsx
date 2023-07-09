import styled from "@emotion/styled";

import type { IconProps } from "./Icon.types";

const StyledIcon = styled.span<Pick<IconProps, "size" | "bold">>`
  font-family: "Segoe Fluent Icons";
  font-size: ${({ size }): string => `${size ?? 16}px`};
  font-weight: ${({ bold }): string => (bold ? "bold" : "normal")};
`;

export default StyledIcon;
