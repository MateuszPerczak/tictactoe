import { useMemo } from "react";

import type { Page, PageRendererProps } from "./PageRenderer.types";

const PageRenderer = <P extends string>({
  page,
  pages,
  ...rest
}: PageRendererProps<P>): JSX.Element => {
  const Component = useMemo((): Page<P> => pages[page], [page, pages]);
  return <Component {...rest} />;
};

export default PageRenderer;
