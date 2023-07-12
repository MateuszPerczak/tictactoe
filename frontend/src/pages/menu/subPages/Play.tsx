import Button from "../../../components/button/Button";
import { Icons } from "../../../components/icon/Icon.types";
import Logo from "../../../components/logo/Logo";
import Panel from "../../../components/panel/Panel";

const Play = (): JSX.Element => {
  return (
    <Panel layoutId="menu">
      <Logo />
      <Button
        to="/game/ai"
        icon={Icons.Play}
        label="Play with ai"
        description="You will lose bitch 😊"
      />
      <Button
        to="/game/solo"
        icon={Icons.Play}
        label="Play with friend"
        description="Learn more about this project!"
      />
      <Button
        to="/game/multiplayer"
        icon={Icons.Play}
        label="Play with others"
        description="Haha circle go brrrr."
      />
      <Button
        icon={Icons.Cancel}
        label="Go back"
        description="Nah bro let me go"
        to="/"
      />
    </Panel>
  );
};

export default Play;
