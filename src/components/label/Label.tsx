import Icon from "@components/icon/Icon";
import { memo } from "react";

import StyledLabel from "./Label.styles";
import type { LabelProps } from "./Label.types";

const Label = ({
  label,
  description,
  icon,
  bold,
  size,
  ...rest
}: LabelProps): JSX.Element => {
  return (
    <StyledLabel {...rest}>
      <div className="label-header">
        {icon && <Icon {...{ icon, bold, size: size ?? 30 }} />}
        {label && <span className="label">{label}</span>}
      </div>
      {description && <p className="label-description">{description}</p>}
    </StyledLabel>
  );
};

export default memo(Label);
