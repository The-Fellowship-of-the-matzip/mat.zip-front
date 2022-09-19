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
      <div id="app">
        <ThemeProvider theme={theme}>
          <GlobalStyle env={"storybook"} />
          <BrowserRouter>
            <Story {...context} />
          </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  },
];
