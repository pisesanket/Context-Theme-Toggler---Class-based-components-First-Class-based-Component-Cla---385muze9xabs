import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const context = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState("light");
  function toggleLocalTheme() {
    if (localTheme === "light") {
      setLocalTheme("dark");
    } else {
      setLocalTheme("light");
    }
  }
  useEffect(() => {
    toggleLocalTheme();
  }, [context.theme]);
  return (
    <div
      className={"bg-" + localTheme}
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-themed-box"
    >
      {/* Write code below this line */}
      <p className={"txt-" + localTheme} id="local-themed-text-container">
        Hiii
      </p>
      <button
        className={"btn btn-" + localTheme}
        id="local-theme-toggler"
        onClick={toggleLocalTheme}
      >
        Toggle local theme to {localTheme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export { LocalThemedBox };
