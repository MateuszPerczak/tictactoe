import styled from "@emotion/styled";

const StylesWrapper = styled.span`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-weight: ${({ bold }) => {
    return bold ? "bold" : "normal";
  }};
  font-size: ${({ size }) => {
    return size;
  }}rem;
`;

const Icon = ({ icon, bold, size = 1 }) => {
  return (
    <StylesWrapper bold={bold} size={size}>
      {icon}
    </StylesWrapper>
  );
};

export default Icon;
