import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
