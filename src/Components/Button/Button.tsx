import styled from "@emotion/styled";
import type { RefAttributes, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonProps = PropsWithChildren<
  LinkProps & RefAttributes<HTMLAnchorElement>
>;

type StyledButtonProps = LinkProps & RefAttributes<HTMLAnchorElement>;

const StyledButton = styled(Link)<StyledButtonProps>`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  color: #fff;
  backdrop-filter: blur(4px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  border: 2px solid #fff;
  padding: 0.8rem 1rem;
  text-decoration: none;
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

const Button = ({ children, ...rest }: ButtonProps): JSX.Element => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
