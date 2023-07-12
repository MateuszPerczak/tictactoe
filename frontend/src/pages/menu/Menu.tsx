import Button from "../../components/button/Button";
import Icon from "../../components/icon/Icon";
import { Icons } from "../../components/icon/Icon.types";
import Logo from "../../components/logo/Logo";
import Panel from "../../components/panel/Panel";

const Menu = (): JSX.Element => {
  return (
    <Panel layoutId="menu">
      <Logo />
      <Button
        to="play"
        icon={Icons.Play}
        label="Play"
        description="Haha circle go brrrr."
      />
      <Button
        to="about"
        icon={Icons.Info}
        label="About"
        description="Learn more about this project!"
      />
    </Panel>
  );
};

export default Menu;
