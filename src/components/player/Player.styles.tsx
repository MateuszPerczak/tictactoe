import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledPlayer = styled(motion.div)`
  display: flex;
  flex: 0 0 auto;
  background-color: ${({ theme: { strokeRest } }): string => strokeRest};
  border-radius: 10px;
  .icon-wrapper {
    display: grid;
    place-items: center;
    padding: 10px;
    /* background-color: ${({ theme: { strokeRest } }): string => strokeRest}; */
    /* border: 1px solid ${({ theme: { strokeRest } }): string => strokeRest}; */
  }
`;

export default StyledPlayer;
