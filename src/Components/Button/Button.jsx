import styled from "@emotion/styled";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import { Link } from "react-router-dom";

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 7rem;
  backdrop-filter: blur(5px);
  color: #fff;
  border: 2px solid #fff;
  border-radius: 16px;
  padding: 0 10px;
  transition: background-color 200ms, color 200ms;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #212121;
  }
`;

const Button = ({ text, icon, to = "", onClick }) => {
  return (
    <LinkWrapper to={to} onClick={onClick}>
      <Icon icon={icon} size={1.3} />
      <Text text={text} />
    </LinkWrapper>
  );
};

export default Button;
