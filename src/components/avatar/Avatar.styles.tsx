import styled from "@emotion/styled";

import type { AvatarProps } from "./Avatar.types";

export const StyledAvatar = styled.div<AvatarProps>`
  background-image: ${({ url }) => (url ? `url("${url}")` : "unset")};
  background-size: cover;
  border-radius: 50%;
  width: 55px;
  aspect-ratio: 1;
`;
