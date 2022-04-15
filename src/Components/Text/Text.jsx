import styled from "@emotion/styled";

const StyesWrapper = styled.span`
  padding-top: 5px;
`;

const Text = ({ text }) => {
  return <StyesWrapper>{text}</StyesWrapper>;
};

export default Text;
