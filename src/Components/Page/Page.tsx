import type { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";

type PageProps = StyledComponent<
  {
    theme?: Theme | undefined;
    as?: React.ElementType<any> | undefined;
  },
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  {}
>;

const Page: PageProps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default Page;
