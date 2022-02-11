import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: string;
    primary: string;
    green: string;
    blue: string;
    black: string;
    darkYellow: string;
  }
}
