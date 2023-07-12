import type { Theme } from "@emotion/react";

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    textPrimary: "#1A1A1A",
    textDisabled: "",
    textSecondary: "",
    fillDisabled: "",
    fillHover: "",
    fillRest: "",
    strokeRest: "",
    background: "",
    fillActive: "",
    strokeActive: "",
    strokeDisabled: "",
    strokeHover: "",
  },
  dark: {
    textPrimary: "#FFF",
    textSecondary: "#CECECE",
    textDisabled: "#767676",
    fillRest: "#353535",
    fillHover: "#3A3A3A",
    fillActive: "#2F2F2F",
    fillDisabled: "#313131",
    strokeRest: "#373737",
    strokeHover: "#3C3C3C",
    strokeActive: "#373737",
    strokeDisabled: "#373737",
    background: "#282828",
  },
};

export default themes;
