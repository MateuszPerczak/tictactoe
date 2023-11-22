import { memo } from "react";

import StyledLabel from "./Label.styles";
import type { LabelProps } from "./Label.types";

const Label = ({ label, description, ...rest }: LabelProps): JSX.Element => {
  return (
    <StyledLabel {...rest}>
      <div className="label-header">
        {label && <span className="label">{label}</span>}
      </div>
      {description && <p className="label-description">{description}</p>}
    </StyledLabel>
  );
};

export default memo(Label);
