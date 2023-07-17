import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledMenu = styled(motion.menu)`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  gap: 10px;
  box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  background-color: ${({ theme: { background } }): string => background};
  border: 1px solid ${({ theme: { strokeRest } }): string => strokeRest};
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
`;

export default StyledMenu;
