import type { MotionProps } from "framer-motion";
import type { CSSProperties, MouseEventHandler } from "react";

import type { IconProps } from "../icon/Icon.types";

export type ButtonProps = (
  | {
      label: string;
      description?: string;
    }
  | { label?: never; description?: never }
) & {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  justifyContent?: CSSProperties["justifyContent"];
} & IconProps &
  MotionProps;
