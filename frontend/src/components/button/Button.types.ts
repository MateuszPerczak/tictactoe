import type { RefAttributes } from "react";
import type { NavLinkProps } from "react-router-dom";

import type { IconProps } from "../icon/Icon.types";

export type ButtonProps = {
  label: string;
  description?: string;
} & IconProps &
  NavLinkProps &
  RefAttributes<HTMLAnchorElement>;
