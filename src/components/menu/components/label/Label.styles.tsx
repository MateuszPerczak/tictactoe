import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledLabel = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 358px;
  background-color: ${({ theme: { fillRest } }): string => fillRest};
  border: 1px solid ${({ theme: { strokeRest } }): string => strokeRest};
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
  header {
    font-size: 1.4rem;
    font-weight: bold;
  }
  p {
    text-align: justify;
    font-size: 1.1rem;
  }
`;

export default StyledLabel;
