import { StyledImageLabel } from "./ImageLabel.styles";
import type { ImageLabelProps } from "./ImageLabel.types";

export const ImageLabel = ({
  image,
  label,
  description,
  ...rest
}: ImageLabelProps): JSX.Element => {
  return (
    <StyledImageLabel {...rest}>
      {image}
      <div className="label-body">
        {label && <span className="label">{label}</span>}
        {description && <span className="label-description">{description}</span>}
      </div>
    </StyledImageLabel>
  );
};
