import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    fillRest: string;
    fillHover: string;
    fillActive: string;
    fillDisabled: string;
    strokeRest: string;
    strokeHover: string;
    strokeActive: string;
    strokeDisabled: string;
    background: string;
  }
}
