import { memo } from "react";

import { pageAnimations } from "./Page.animations";
import StyledPage from "./Page.styles";
import type { PageProps } from "./Page.types";

const Page = ({ children, width, ...rest }: PageProps): JSX.Element => {
  return (
    <StyledPage
      variants={pageAnimations}
      initial="initial"
      animate="animate"
      style={{ width }}
      exit="exit"
      {...rest}
    >
      {children}
    </StyledPage>
  );
};

export default memo(Page);
