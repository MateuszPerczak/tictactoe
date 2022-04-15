import styled from "@emotion/styled";
import Icon from "../Icon/Icon";

const StylesWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 3rem;
`;

const Logo = () => {
  return (
    <StylesWrapper>
      <Icon icon="&#xEF2C;" />
      <Icon icon="&#xED66;" bold />
    </StylesWrapper>
  );
};

export default Logo;
