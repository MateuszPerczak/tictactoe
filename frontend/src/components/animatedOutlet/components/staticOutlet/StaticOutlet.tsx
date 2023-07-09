import { useMemo } from "react";
import { useOutlet } from "react-router-dom";

const StaticOutlet = (): JSX.Element => {
  const outlet = useOutlet();

  const memoizedOutlet = useMemo(() => {
    return outlet;
  }, []);

  return <>{memoizedOutlet}</>;
};

export default StaticOutlet;
