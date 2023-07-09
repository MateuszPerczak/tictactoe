import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import { OutletWrapper, StaticOutlet } from "./components";

const AnimatedOutlet = (): JSX.Element => {
  const location = useLocation();
  return (
    <AnimatePresence mode="popLayout">
      <OutletWrapper key={location.pathname}>
        <StaticOutlet />
      </OutletWrapper>
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
