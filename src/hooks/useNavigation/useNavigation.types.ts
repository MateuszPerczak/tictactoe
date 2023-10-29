export type NavigationState<P extends string> = {
  currentPage: P;
  pageHistory: P[];
};

export type UseNavigation<P extends string> = {
  navigateTo: (page: P) => void;
  goBack: () => void;
  page: P;
};
