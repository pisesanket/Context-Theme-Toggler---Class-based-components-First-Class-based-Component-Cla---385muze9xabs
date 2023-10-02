import React, { useState } from "react";
import "../styles/App.css";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { Page } from "./Page";
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div id="main">
      <ThemeProvider value={{ theme: theme, setTheme: setTheme }}>
        <Page />
        <ThemeToggleButton />
      </ThemeProvider>
    </div>
  );
};

export default App;
