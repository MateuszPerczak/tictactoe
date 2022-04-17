import Button from "../Components/Button/Button";
import Page from "../Components/Page/Page";
import Animate from "../Components/Animate/Animate";
import Icon from "../Components/Icon/Icon";
import TextSeperator from "../Components/Text/TextSeperator";
import Header from "../Components/Header/Header";
import Link from "../Components/Link/Link";
import Text from "../Components/Text/Text";

const TestPage = ({ setPage }) => {
  return (
    <Page>
      <Animate duration={0.3} type="puff" animateGroup step={0.1}>
        <Header
          header="Debug:"
          description="Yup, just another test page!"
          size={6}
        />
        <Header header="Components:" size={3} />
        <Button icon="&#xED54;" text="Button" />
        <Link icon="&#xE167;" text="Link" />
        <Text text="Text" />
        <Icon icon="&#xECAA;" size={3} />
        <Header header="Header" size={2} />
        <TextSeperator />
        <Header header="Animations:" size={3} />
        <Header header="Rotatre:" size={2} />
        <Animate duration={1} type="rotate" delay={1} infinite>
          <Icon icon="&#xE115;" size={3} />
        </Animate>
        <Header header="Puff:" size={2} />
        <Animate duration={1} type="puff" delay={2} infinite>
          <Icon icon="&#xEA80;" size={3} />
        </Animate>
        <Header header="Hover:" size={2} />
        <Animate duration={1} type="hover" delay={1} infinite>
          <Icon icon="&#xED55;" size={3} />
        </Animate>
        <Header header="Slide:" size={2} />
        <Animate duration={1} type="slide" delay={1} infinite>
          <Icon icon="&#xEC7A;" size={3} />
        </Animate>
        <TextSeperator space={4} />
        <Button icon="&#xE76B;" text="Back" onClick={() => setPage("main")} />
      </Animate>
    </Page>
  );
};

export default TestPage;
