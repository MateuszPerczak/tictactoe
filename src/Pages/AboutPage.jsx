import Page from "../Components/Page/Page";
import Animate from "../Components/Animate/Animate";
import Text from "../Components/Text/Text";
import TextSeperator from "../Components/Text/TextSeperator";
import Header from "../Components/Header/Header";
import Icon from "../Components/Icon/Icon";
import Button from "../Components/Button/Button";
import Link from "../Components/Link/Link";

const InfoPage = ({ setPage }) => {
  return (
    <Page>
      <Animate duration={0.9} type="slide" animateGroup step={0.1}>
        <Animate delay={1.9} duration={5} type="hover" infinite>
          <Icon icon="&#xE946;" size={4} />
        </Animate>
        <TextSeperator space={0.5} />
        <Header header="ABOUT" />
        <TextSeperator />
        <Header header="TicTacToe" description="By: Mateusz Perczak" />
        <TextSeperator space={2} />
        <Header header="Used frameworks:" size={2} />
        <Text text="React, Emotion" />
        <TextSeperator />
        <Header header="Used icons:" size={2} />
        <Text text="Microsoft Fluent UI Icons" />
        <TextSeperator />
        <Header header="Useful links:" size={2} />
        <Link
          icon="&#xE71B;"
          text="Github"
          href="https://github.com/MateuszPerczak"
        />
        <Link
          icon="&#xE71B;"
          text="This project"
          href="https://github.com/MateuszPerczak/tictactoe"
        />
        <Link
          icon="&#xE12B;"
          text="My website"
          href="https://mateuszperczak.github.io/"
        />
        <TextSeperator space={2} />
      </Animate>
      <Animate delay={2.4} duration={0.2} type="scale">
        <Button icon="&#xE76B;" text="Back" onClick={() => setPage("main")} />
      </Animate>
    </Page>
  );
};

export default InfoPage;
