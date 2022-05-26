import styled from "@emotion/styled";
import type { FC, ReactNode } from "react";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

type PageProps = {
  children: ReactNode;
};

const Page: FC<PageProps> = ({ children }: PageProps): JSX.Element => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;