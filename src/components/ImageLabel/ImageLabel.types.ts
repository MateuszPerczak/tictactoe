import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

export type ImageLabelProps = {
  image?: JSX.Element;
  label?: string;
  description?: string;
} & HTMLAttributes<HTMLDivElement> &
  MotionProps;
