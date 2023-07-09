import { Icons } from "../icon/Icon.types";
import Logo from "../logo/Logo";
import Button from "./components/button/Button";
import StyledMenu from "./Menu.styles";

const Menu = (): JSX.Element => {
  return (
    <StyledMenu>
      <Logo />
      <Button icon={Icons.Play} label="Play" description="Haha circle go brrrr." />
      <Button
        icon={Icons.Info}
        label="About"
        description="Learn more about this project!"
      />
    </StyledMenu>
  );
};

export default Menu;
