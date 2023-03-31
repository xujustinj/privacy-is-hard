// https://scalablecss.com/styled-components-global-styles/
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  p {
    color: white;
    font-family: Arial;
    font-size:19px;

  }

  button {
    background: yellow;
    margin-right: 30px;
    border: none;
    border-radius: 3px;
    font-size: medium;
    padding: 8px 16px;
    margin-bottom: 10px;
    background-color: rgb(53, 117, 142);
    color: rgb(0,0,0);
  }

`;

export default GlobalStyle;
