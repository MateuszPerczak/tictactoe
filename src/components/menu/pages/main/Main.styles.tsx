import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledMain = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px 20px 20px;
  .buttons-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    flex: 0 0 70px;
    gap: 10px;
  }
`;

export default StyledMain;
