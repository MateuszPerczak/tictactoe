import type { Page } from "@components/pageRenderer/PageRenderer.types";

import About from "./about/About";
import Initial from "./initial/Initial";
import Main from "./main/Main";
import Play from "./play/Play";

export type Pages = "initial" | "about" | "main" | "play";

export const pages: Record<Pages, Page<Pages>> = {
  initial: Initial,
  about: About,
  main: Main,
  play: Play,
};
