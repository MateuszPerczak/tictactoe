import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  background-color: ${({ theme: { background } }): string => background};
  border-top: 1px solid ${({ theme: { strokeRest } }): string => strokeRest};
  .title-link {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme: { textPrimary } }): string => textPrimary};
    text-decoration: none;
  }
  .text-wrapper {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 350px) {
      justify-content: center;
    }
    align-items: center;
    gap: 10px;
    font-size: 0.8rem;
  }
`;

export default StyledFooter;
