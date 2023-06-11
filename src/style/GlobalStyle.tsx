import { theme } from "./Theme";

import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle<{ env?: string }>`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${theme.color.whiteBackground};
    color: ${theme.color.gray800};
    font-size: 1.6rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration:none;
    color: ${theme.color.gray800}
  }

  #app  {
    position: relative;

    max-width: 48rem;
    min-width: 28rem;
    margin: 0 auto;

    background-color: ${theme.color.white};
    
    box-shadow: 0 0 0.315rem rgba(0, 0, 0, 0.25);

    ${({ env }) =>
      env === "storybook" &&
      css`
        min-height: 100vh;
      `}
  }  
`;

export default GlobalStyle;
