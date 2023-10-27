import type { MotionProps } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren } from "react";

export type PageProps = PropsWithChildren<
  {
    width?: number;
  } & HTMLAttributes<HTMLDivElement> &
    MotionProps
>;
