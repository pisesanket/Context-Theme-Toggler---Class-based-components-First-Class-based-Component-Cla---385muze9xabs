import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const context = useContext(ThemeContext);
  const themeToggle = () => {
    const { setTheme } = context;
    if (context.theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <button
        className={"btn btn-" + context.theme + " txt-" + context.theme}
        id="global-theme-toggler"
        onClick={themeToggle}
      >
        Switch to {context.theme === "light" ? "dark" : "light"} theme
      </button>
    </>
  );
};
export { ThemeToggleButton };
