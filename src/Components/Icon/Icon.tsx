import styled from "@emotion/styled";

type IconProps = {
  fontSize?: number;
  bold?: boolean;
};

const Icon = styled.span<IconProps>`
  font-family: "Segoe Fluent Icons";
  font-size: ${({ fontSize }: IconProps) => {
    return fontSize ? fontSize : "1.5";
  }}rem;
  font-weight: ${({ bold }: IconProps) => {
    return bold ? "bold" : "normal";
  }};
`;

export default Icon;
