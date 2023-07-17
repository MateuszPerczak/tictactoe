import { memo } from "react";

import Icon from "../icon/Icon";
import { Icons } from "../icon/Icon.types";
import StyledLogo from "./Logo.styles";

const Logo = (): JSX.Element => {
  return (
    <StyledLogo layoutId="logo">
      <span>
        <Icon icon={Icons.Cross} size={30} />
        <Icon icon={Icons.Circle} bold size={30} />
      </span>
      <span>TicTacToe</span>
    </StyledLogo>
  );
};

export default memo(Logo);
