import Game from "@components/game/Game";
import { Icons } from "@components/icon/Icon.types";
import Button from "@components/menu/components/button/Button";
import type { PagesProps } from "@components/menu/Menu.types";
import { memo } from "react";

import StyledMain from "./Main.styles";

const Main = ({ goBack }: PagesProps): JSX.Element => {
  return (
    <StyledMain>
      <Game />
      <div className="buttons-wrapper">
        <Button icon={Icons.Back} label="Go back" onClick={goBack} />
        <Button icon={Icons.Refresh} label="Restart" justifyContent="center" />
        <Button icon={Icons.Color} label="Test" justifyContent="center" />
      </div>
    </StyledMain>
  );
};

export default memo(Main);
