import styled from "@emotion/styled";

const StylesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  width: 100vw;
  height: 100vh;
  background-image: url("./images/bg.webp");
  overflow: hidden;
`;

const Page = ({ children }) => {
  return <StylesWrapper>{children}</StylesWrapper>;
};

export default Page;
