import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { injectGlobal } from "@emotion/css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

injectGlobal([
  `
  html {
    --background-color: #fff;
    --font-family: Inter, Roboto, Helvetica, Arial;

    background-color: var(--background-color);
  }

  body {
    font-family: var(--font-family);
    margin: 0;
  }
`,
]);
