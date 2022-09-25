export type Theme = Record<string, string>;

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    background: "#fff",
    color: "#000",
  },
  dark: {
    background: "#252525",
    color: "#fff",
  },
};

export default themes;
