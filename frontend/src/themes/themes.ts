import type { Theme } from "@emotion/react";

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    background: "#fff",
    color: "#000",
    border: "#000",
    shadow: "#11111133",
    footer: "#ffffff77",
  },
  dark: {
    background: "#212121",
    color: "#fff",
    border: "#333",
    shadow: "#11111133",
    footer: "#212121",
  },
};

export default themes;
