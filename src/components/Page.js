import React, { useContext } from "react";
import { LocalThemedBox } from "./LocalThemedBox";
import { ThemeContext } from "./ThemeProvider";
import "../styles/App.css";

const Page = () => {
  const context = useContext(ThemeContext);
  return (
    <div
      className={
        "container " + `${context.theme === "light" ? "bg-light" : "bg-dark"}`
      }
      id="themed-page"
    >
      <p className={"txt-" + context.theme} id="themed-text-container">
        lorem ipsum dolor iterit n stuff
      </p>
      <button className={"btn btn-" + context.theme} id="themed-button">
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
};

export { Page };
