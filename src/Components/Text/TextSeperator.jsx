import styled from "@emotion/styled";

const SeperatorWrapper = styled.div`
  height: ${({ space }) => {
    return space;
  }}rem;
`;

const TextSeperator = ({ space = 1 }) => {
  return <SeperatorWrapper space={space} />;
};

export default TextSeperator;
