import StyledMenuLabel from "./MenuLabel.styles";
import type { MenuLabelProps } from "./MenuLabel.types";

const MenuLabel = ({ label, description }: MenuLabelProps): JSX.Element => {
  return (
    <StyledMenuLabel
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", delay: 0.2, duration: 0.2 }}
    >
      {label && <p className="menu-label">{label}</p>}
      {description && <span className="menu-description">{description}</span>}
    </StyledMenuLabel>
  );
};

export default MenuLabel;
