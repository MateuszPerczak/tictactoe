import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledGame = styled(motion.div)`
  width: 800px;
  height: 400px;
  background-color: ${({ theme: { fillRest } }): string => fillRest};
  border-radius: 10px;
`;

export default StyledGame;
