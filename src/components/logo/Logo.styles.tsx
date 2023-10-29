import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledLogo = styled(motion.p)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  will-change: transform;
`;

export default StyledLogo;
