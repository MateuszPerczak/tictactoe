import { pageAnimations } from "./Page.animations";
import StyledPage from "./Page.styles";
import type { PageProps } from "./Page.types";

const Page = ({ children, width, ...rest }: PageProps): JSX.Element => {
  return (
    <StyledPage
      variants={pageAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ width }}
      {...rest}
    >
      {children}
    </StyledPage>
  );
};

export default Page;
