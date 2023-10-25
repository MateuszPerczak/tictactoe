export type MenuState = {
  page: string;
  pageHistory: string[];
};

export type SetPage = (page: string) => void;
export type GoBack = () => void;

export type PagesProps = {
  setPage: SetPage;
  goBack: GoBack;
};

export type MenuPages = (pagesProps: PagesProps, page: string) => JSX.Element;
