import { ThemeProvider } from "styled-components";

import { theme } from "../src/style/Theme";
import GlobalStyle from "../src/style/GlobalStyle";

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
          <Story {...context} />
        </ThemeProvider>
      </>
    );
  },
];
