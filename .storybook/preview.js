import GlobalStyle from "../src/style/GlobalStyle";
import { theme } from "../src/style/Theme";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Story {...context} />
          </BrowserRouter>
        </ThemeProvider>
      </>
    );
  },
];
