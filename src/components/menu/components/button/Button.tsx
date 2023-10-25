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
    <StyledButton
      type="button"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", delay: 0.2, duration: 0.2 }}
      {...rest}
    >
      <Icon icon={icon} bold={bold} size={size ?? 30} />
      <div className="button-content">
        <p className="button-label">{label}</p>
        {description && <span className="button-description">{description}</span>}
      </div>
    </StyledButton>
  );
};

export default Button;
