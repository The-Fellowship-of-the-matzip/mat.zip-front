import { theme } from "./Theme";

import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle<{ env?: string }>`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.white};
    color: ${theme.black};

    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
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
    color: ${theme.black}
  }

  #app  {
    max-width: 37.5rem;
    min-width: 23.45rem;
    margin: 0 auto;

    position: relative;
    
    box-shadow: 0 0 0.315rem rgba(0, 0, 0, 0.25);

    ${({ env }) =>
      env === "storybook" &&
      css`
        min-height: 100vh;
      `}
  }

  input {
    color: ${theme.black}
  }

  
`;

export default GlobalStyle;
