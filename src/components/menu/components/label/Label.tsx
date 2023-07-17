import StyledLabel from "./Label.styles";

const Label = (): JSX.Element => {
  return (
    <StyledLabel
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", delay: 0.2, duration: 0.2 }}
    >
      <header>About this project</header>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </StyledLabel>
  );
};

export default Label;
