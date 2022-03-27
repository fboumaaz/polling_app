import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, purple, red } from "@mui/material/colors";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0097a7"
    },
    secondary: {
      main: "#ef6c00"
    },
    error: {
      main: "#f4511e"
    },
    info: {
      main: "#009688"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  </React.StrictMode>,
  document.getElementById("root")
);
