import type { MouseEventHandler } from "react";

import type { IconProps } from "../../../icon/Icon.types";

export type ButtonProps = {
  label: string;
  description?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & IconProps;
