import styled from "@emotion/styled";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

const StylesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #212121;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 0 10px;
  transition: background-color 200ms, color 200ms;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #212121;
  }
`;

const Button = ({ text, icon, onClick }) => {
  return (
    <StylesWrapper onClick={onClick}>
      <Icon icon={icon} size={1.3} />
      <Text text={text} />
    </StylesWrapper>
  );
};

export default Button;
