import type { UseNavigation } from "@hooks/useNavigation/useNavigation.types";

export type PageRendererProps<P extends string> = {
  pages: Record<P, Page<P>>;
} & UseNavigation<P>;

export type Page<P extends string> = (props: RenderProps<P>) => JSX.Element;

export type RenderProps<P extends string> = Pick<
  UseNavigation<P>,
  "goBack" | "navigateTo"
>;
