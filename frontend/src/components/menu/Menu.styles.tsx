import styled from "@emotion/styled";

const StyledMenu = styled.menu`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 10px;
  box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  background-color: ${({ theme: { background } }): string => background};
  border: 1px solid ${({ theme: { border } }): string => border};
  border-radius: 10px;
  padding: 20px;
`;

export default StyledMenu;
