import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledMenuLabel = styled(motion.section)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { fillRest } }): string => fillRest};
  border: 1px solid ${({ theme: { strokeRest } }): string => strokeRest};
  border-radius: 10px;
  padding: 20px;
  gap: 10px;
  overflow: hidden;
  .menu-label {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .menu-description {
    text-align: justify;
    font-size: 1.1rem;
  }
`;

export default StyledMenuLabel;
