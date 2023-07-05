import { useEffect, useState } from "react";
import { debounceTime, fromEvent } from "rxjs";

type WindowDimensions = {
  width: number;
  height: number;
};

const useWindowDimensions = (): WindowDimensions => {
  const getWindowDimensions = (): WindowDimensions => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const subscription = fromEvent(window, "resize")
      .pipe(debounceTime(100))
      .subscribe(() => {
        setWindowDimensions(getWindowDimensions());
      });

    return (): void => subscription.unsubscribe();
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
