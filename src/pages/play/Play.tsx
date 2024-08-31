import Button from "@components/button/Button";
import { Icons } from "@components/icon/Icon.types";
import Page from "@components/page/Page";
import type { RenderProps } from "@components/pageRenderer/PageRenderer.types";

import type { Pages } from "../pages";
import { playAnimationVariant } from "./Play.animation";

const Play = ({ goBack, navigateTo }: RenderProps<Pages>): JSX.Element => {
  return (
    <Page width={400}>
      <Button
        icon={Icons.User}
        label="Play with friend"
        description="If u got one."
        onClick={(): void => navigateTo("main")}
        variants={playAnimationVariant}
      />
      <Button
        icon={Icons.Robot}
        label="Play with computer"
        description="Actually it's just min max algorithm."
        disabled
        variants={playAnimationVariant}
      />
      <Button
        icon={Icons.Play}
        label="Play with others"
        description="Coming soon."
        disabled
        variants={playAnimationVariant}
      />
      <Button
        icon={Icons.Back}
        label="Go back"
        description="Nah bro let's go back."
        onClick={goBack}
        variants={playAnimationVariant}
      />
    </Page>
  );
};

export default Play;
