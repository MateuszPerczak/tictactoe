import Button from "../../../components/button/Button";
import { Icons } from "../../../components/icon/Icon.types";
import Logo from "../../../components/logo/Logo";
import Panel from "../../../components/panel/Panel";

const About = (): JSX.Element => {
  return (
    <Panel layoutId="menu">
      <Logo />
      <Button
        icon={Icons.Cancel}
        label="Go back"
        description="Nah bro let me go"
        to="/"
      />
    </Panel>
  );
};

export default About;
