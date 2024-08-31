import Button from "@components/button/Button";
import { Icons } from "@components/icon/Icon.types";
import Page from "@components/page/Page";
import type { RenderProps } from "@components/pageRenderer/PageRenderer.types";

import type { Pages } from "../pages";
import { initialAnimationVariant } from "./Initial.animation";

const Initial = ({ navigateTo }: RenderProps<Pages>): JSX.Element => {
  return (
    <Page width={400}>
      <Button
        icon={Icons.Play}
        label="Play"
        description="Let's goooooo."
        onClick={(): void => navigateTo("play")}
        variants={initialAnimationVariant}
      />
      <Button
        icon={Icons.Info}
        label="About"
        description="Learn more about this project!"
        onClick={(): void => navigateTo("about")}
        variants={initialAnimationVariant}
      />
    </Page>
  );
};

export default Initial;
