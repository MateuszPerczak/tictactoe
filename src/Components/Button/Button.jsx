import styled from "@emotion/styled";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

const StylesWrapeer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #212121;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 5px 10px;
  transition: background-color 200ms, color 200ms;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #212121;
  }
`;

const Button = ({ text, icon, onClick }) => {
  return (
    <StylesWrapeer onClick={onClick}>
      <Icon icon={icon} />
      <Text text={text} />
    </StylesWrapeer>
  );
};

export default Button;
