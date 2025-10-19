import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledLabel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({ theme: { fillRest } }): string => fillRest};
  border: 1px solid ${({ theme: { strokeRest } }): string => strokeRest};
  will-change: transform;
  .label-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .label {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .label-description {
    text-align: justify;
    font-size: 1.1rem;
  }
`;

export default StyledLabel;
