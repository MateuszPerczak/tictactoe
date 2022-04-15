import styled from "@emotion/styled";

const StylesWrapper = styled.span`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-weight: ${({ bold }) => {
    return bold ? "bold" : "normal";
  }};
`;

const Icon = ({ icon, bold }) => {
  return <StylesWrapper bold={bold}>{icon}</StylesWrapper>;
};

export default Icon;
