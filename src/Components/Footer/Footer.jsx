import styled from "@emotion/styled";

const StylesWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background: #212121;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const Footer = () => {
  return (
    <StylesWrapper>
      <span>Mateusz Perczak &copy; 2022</span>
    </StylesWrapper>
  );
};

export default Footer;
