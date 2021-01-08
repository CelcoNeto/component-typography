import React from "react";
import { ThemeProvider } from "styled-components";
import { Typography } from "./components/typography";
import { theme } from "./theme/globals";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography />
    </ThemeProvider>
  );
}

export default App;
