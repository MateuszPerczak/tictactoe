import Icon from "@components/icon/Icon";
import { Icons } from "@components/icon/Icon.types";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";

import StyledPlayer from "./Player.styles";
import type { PlayerProps } from "./Player.types";

const Player = ({ player }: PlayerProps): JSX.Element => {
  return (
    <AnimatePresence>
      <StyledPlayer>
        <div className="icon-wrapper">
          <Icon icon={Icons.Cross} size={24} />
        </div>
        <div className="icon-wrapper">
          <Icon icon={Icons.Circle} bold size={24} />
        </div>
      </StyledPlayer>
    </AnimatePresence>
  );
};

export default memo(Player);
