import styled from "@emotion/styled";

import StyledMenu from "../../Menu.styles";

const StyledButton = styled.button`
  display: flex;
  flex: 0 0 70px;
  align-items: center;
  justify-content: stretch;
  gap: 20px;
  padding: 0 20px;
  background-color: ${({ theme: { background } }): string => background};
  color: ${({ theme: { color } }): string => color};
  border: 1px solid ${({ theme: { color } }): string => color};
  border-radius: 10px;
  font-family: inherit;
  transition: border-color 200ms, color 200ms;
  ${StyledMenu}:hover > & {
    color: ${({ theme: { border } }): string => border};
    border-color: ${({ theme: { border } }): string => border};
  }
  ${StyledMenu} > &:hover {
    color: ${({ theme: { color } }): string => color};
    border-color: ${({ theme: { color } }): string => color};
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
