import type { Variants } from "framer-motion";

export const aboutAnimationVariant: Variants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.2, ease: "easeOut" },
  },
};
