export type MenuState = {
  page: string;
  pageHistory: string[];
};

export type SetPage = (page: string) => void;
export type GoBack = () => void;

export type MenuPages = (setPage: SetPage, goBack: GoBack, page: string) => JSX.Element;
