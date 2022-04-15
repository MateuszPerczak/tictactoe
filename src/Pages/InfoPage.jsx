import Page from "../Components/Page/Page";
import Animate from "../Components/Animate/Animate";
import Text from "../Components/Text/Text";
import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";

const InfoPage = ({ setPage }) => {
  return (
    <Page>
      <Animate delay={0.1} duration={1} type="slide">
        <Header header="INFO" />
        <Text text="Used frameworks:" />
      </Animate>
      <Animate delay={0.2} duration={1} type="slide">
        <Text text="React 18.0.0" />
      </Animate>
      <Animate delay={0.3} duration={1} type="slide">
        <Text text="Emotion 11.9.0" />
      </Animate>
      <Animate delay={0.4} duration={1} type="slide">
        <Text text="Fluent UI Icons" />
      </Animate>
      <Animate delay={1} duration={1} type="slide">
        <Button icon="&#xE830;" text="BACK" onClick={() => setPage("main")} />
      </Animate>
    </Page>
  );
};

export default InfoPage;
