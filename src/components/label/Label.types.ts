import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

export type LabelProps = {
  label?: string;
  description?: string;
} & HTMLAttributes<HTMLDivElement> &
  MotionProps;
