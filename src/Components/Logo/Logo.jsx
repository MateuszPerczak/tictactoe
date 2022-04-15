import styled from "@emotion/styled";
import Icon from "../Icon/Icon";

const StylesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = () => {
  return (
    <StylesWrapper>
      <Icon icon="&#xEF2C;" size={3} />
      <Icon icon="&#xED66;" bold size={3} />
    </StylesWrapper>
  );
};

export default Logo;
