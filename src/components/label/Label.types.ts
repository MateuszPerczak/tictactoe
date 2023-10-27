import type { IconProps } from "@components/icon/Icon.types";
import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

export type LabelProps = {
  label?: string;
  description?: string;
} & Partial<IconProps> &
  HTMLAttributes<HTMLDivElement> &
  MotionProps;
