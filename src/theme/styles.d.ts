import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      magenta: string;
      darkLow: string;
      darkMedium: string;
      darkHigh: string;
      lightSolid: string;
      lightHigh: string;
    };

    fontFamily: {
      primary: string;
    };
  }
}
