import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      slate_50?: string;
      slate_400?: string;
      slate_900?: string;
      red_500?: string;
      blue_600: string;
    };
    shadow: {
      primary: string;
    };
    animation: {
      speed?: number;
    };
  }
}
