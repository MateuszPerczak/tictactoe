import { useSpring } from "framer-motion";
import { useEffect } from "react";

const useParallax = (): void => {
  const springConfig = {
    stiffness: 150,
    damping: 60,
    mass: 0.2,
    restDelta: 0.2,
  };
  const moveFactor = 10;

  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  const onMouseMove = ({ clientX, clientY }: MouseEvent): void => {
    springX.set(-((clientX - window.innerWidth / 2) / moveFactor));
    springY.set(-((clientY - window.innerHeight / 2) / moveFactor));
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    springX.onChange(
      () => (document.body.style.backgroundPositionX = `${springX.get()}px`),
    );
    springY.onChange(
      () => (document.body.style.backgroundPositionY = `${springY.get()}px`),
    );
    return (): void => window.removeEventListener("mousemove", onMouseMove);
  });
};

export default useParallax;
