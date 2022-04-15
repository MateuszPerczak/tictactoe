import styled from "@emotion/styled";
import Icon from "../Icon/Icon";

const StylesWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: #fff;
  padding: 0 10px;
  text-decoration: none;
  transition: border 200ms;
  cursor: pointer;
  width: 100%;
`;

const Link = ({ icon, text, href, rel = "noopener noreferrer" }) => {
  return (
    <StylesWrapper href={href} target="_blank" rel={rel}>
      <Icon icon={icon} size={1.2} />
      <span>{text}</span>
    </StylesWrapper>
  );
};

export default Link;
