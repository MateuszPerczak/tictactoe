import { Icons } from "@components/icon/Icon.types";
import Button from "@components/menu/components/button/Button";
import type { PagesProps } from "@components/menu/Menu.types";
import { memo } from "react";

import StyledInitial from "./Initial.styles";

const Initial = ({ setPage }: PagesProps): JSX.Element => {
  return (
    <StyledInitial>
      <Button
        icon={Icons.Play}
        label="Play"
        description="Let's goooooo."
        onClick={(): void => setPage("play")}
      />
      <Button
        icon={Icons.Info}
        label="About"
        description="Learn more about this project!"
        onClick={(): void => setPage("about")}
      />
    </StyledInitial>
  );
};

export default memo(Initial);
