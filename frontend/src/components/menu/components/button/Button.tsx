import Icon from "../../../icon/Icon";
import StyledButton from "./Button.styles";
import type { ButtonProps } from "./Button.types";

const Button = ({ label, description, ...rest }: ButtonProps): JSX.Element => {
  return (
    <StyledButton>
      <Icon size={30} {...rest} />
      <div className="button-content">
        <p className="button-label">{label}</p>
        {description && <span className="button-description">{description}</span>}
      </div>
      {/* <div className="button-wrapper">
        <p className="button-label">Play</p>
        <p className="button-description">Yass les du it</p>
      </div> */}
    </StyledButton>
  );
};

export default Button;
