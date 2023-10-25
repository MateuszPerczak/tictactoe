import { Icons } from "@components/icon/Icon.types";
import Button from "@components/menu/components/button/Button";
import type { PagesProps } from "@components/menu/Menu.types";
import { memo } from "react";

import StyledPlay from "./Play.styles";

const Play = ({ goBack, setPage }: PagesProps): JSX.Element => {
  return (
    <StyledPlay>
      <Button
        icon={Icons.People}
        label="Play with friend"
        description="If u got one."
        onClick={(): void => setPage("main")}
      />
      <Button
        icon={Icons.Robot}
        label="Play with AI"
        description="Actually it's just min max algorithm."
        onClick={(): void => setPage("main")}
      />
      <Button
        icon={Icons.Play}
        label="Play with others"
        description="Coming soon."
        disabled
      />
      <Button
        icon={Icons.Back}
        label="Go back"
        description="Nah bro let's go back."
        onClick={goBack}
      />
    </StyledPlay>
  );
};

export default memo(Play);
