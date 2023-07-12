import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledButton = styled(NavLink)`
  display: flex;
  flex: 0 0 70px;
  align-items: center;
  justify-content: stretch;
  gap: 20px;
  padding: 0 20px;
  background-color: ${({ theme: { fillRest } }): string => fillRest};
  color: ${({ theme: { textPrimary } }): string => textPrimary};
  border: 1px solid ${({ theme: { strokeRest } }): string => strokeRest};
  border-radius: 10px;
  font-family: inherit;
  text-decoration: none;
  transition: background-color 200ms, border-color 200ms, color 200ms;
  &:disabled {
    color: ${({ theme: { textDisabled } }): string => textDisabled};
    background-color: ${({ theme: { fillDisabled } }): string => fillDisabled};
    border: 1px solid ${({ theme: { strokeDisabled } }): string => strokeDisabled};
  }
  &:hover:not([disabled]) {
    background-color: ${({ theme: { fillHover } }): string => fillHover};
    border: 1px solid ${({ theme: { strokeHover } }): string => strokeHover};
  }
  &:active:not([disabled]) {
    background-color: ${({ theme: { fillActive } }): string => fillActive};
    border: 1px solid ${({ theme: { strokeActive } }): string => strokeActive};
  }
  &:focus-visible {
    outline: 1px solid ${({ theme: { textPrimary } }): string => textPrimary};
  }

  .button-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .button-label {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .button-description {
    font-size: 0.8rem;
  }
`;

export default StyledButton;
