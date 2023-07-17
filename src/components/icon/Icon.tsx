import { memo } from "react";

import StyledIcon from "./Icon.styles";
import type { IconProps } from "./Icon.types";

const Icon = ({ icon, ...rest }: IconProps): JSX.Element => {
  return <StyledIcon {...rest}>{icon}</StyledIcon>;
};

export default memo(Icon);
