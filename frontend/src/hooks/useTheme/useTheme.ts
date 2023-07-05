import type { Theme } from "@emotion/react";
import { useEffect, useState } from "react";

import themes, { ColorThemes } from "../../themes/themes";

type UpdateThemeProps = MediaQueryListEvent | MediaQueryList;

const useTheme = (): Theme => {
  const [theme, setTheme] = useState<ColorThemes>(ColorThemes.Dark);

  const updateTheme = ({ matches }: UpdateThemeProps): void => {
    setTheme(matches ? ColorThemes.Dark : ColorThemes.Light);
  };

  useEffect(() => {
    const matchMedia: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    updateTheme(matchMedia);

    matchMedia.addEventListener("change", updateTheme);
    return () => matchMedia.removeEventListener("change", updateTheme);
  }, []);

  return themes[theme];
};

export default useTheme;
