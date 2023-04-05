import { createGlobalStyle } from "styled-components";
import SFHollywoodHillsTTF from "./SFHollywoodHills.ttf";

// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
export const SFHollywoodHills = createGlobalStyle`
  @font-face {
    font-family: 'SF Hollywood Hills';
    src: local('SF Hollywood Hills'),
         url(${SFHollywoodHillsTTF}) format('truetype');
  }
`;
