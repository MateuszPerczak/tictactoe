import { StyledAvatar } from "./Avatar.styles";
import type { AvatarProps } from "./Avatar.types";

export const Avatar = ({ url }: AvatarProps): JSX.Element => {
  return <StyledAvatar url={url}></StyledAvatar>;
};
