import type { StyledComponent } from "@emotion/styled";
import type { MotionProps } from "framer-motion";
import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export type PanelProps = PropsWithChildren<
  {
    width?: number;
  } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    MotionProps
>;
