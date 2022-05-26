import styled from "@emotion/styled";

const StyledLink = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: #fff;
  backdrop-filter: blur(4px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  border: 2px dotted #fff;
  padding: 0.8rem 1rem;
  text-decoration: none;
  font-size: 1.8rem;
  transition: color 200ms, background-color 200ms, transform 200ms;
  &:hover {
    background-color: #fff;
    color: #212121;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Link = ({ ...rest }) => {
  return <StyledLink {...rest} target="_blank" rel="noopener noreferrer" />;
};

export default Link;
