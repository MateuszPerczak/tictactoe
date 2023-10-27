import Icon from "@components/icon/Icon";

import StyledButton from "./Button.styles";
import type { ButtonProps } from "./Button.types";

const Button = ({
  label,
  description,
  icon,
  size,
  bold,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton type="button" layout {...rest}>
      <Icon icon={icon} bold={bold} size={size ?? 30} />
      {label && (
        <div className="button-content">
          {label && <p className="button-label">{label}</p>}
          {description && <span className="button-description">{description}</span>}
        </div>
      )}
    </StyledButton>
  );
};

export default Button;
