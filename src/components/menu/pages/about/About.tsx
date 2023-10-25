import { Icons } from "@components/icon/Icon.types";
import Button from "@components/menu/components/button/Button";
import MenuLabel from "@components/menu/components/menuLabel/MenuLabel";
import type { PagesProps } from "@components/menu/Menu.types";
import { memo } from "react";

import StyledAbout from "./About.styles";

const About = ({ goBack }: PagesProps): JSX.Element => {
  return (
    <StyledAbout>
      <MenuLabel
        label="About"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type specimen
        book."
      />
      <Button icon={Icons.Back} label="Go back" onClick={goBack} />
    </StyledAbout>
  );
};

export default memo(About);
