import CampusContextProvider from "context/CampusContextProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import App from "App";

import GlobalStyle from "style/GlobalStyle";
import { theme } from "style/Theme";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mock/browser");
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <CampusContextProvider>
          <BrowserRouter basename="/mat.zip-front">
            <App />
          </BrowserRouter>
        </CampusContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
