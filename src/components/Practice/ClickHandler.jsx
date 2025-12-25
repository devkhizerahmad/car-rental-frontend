import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

ThemeContext;

function ClickHandler(params) {
  console.log("Name :", params);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClick = (name) => {
    alert(`name is ${name}`);
  };
  return (
    <>
      <div
        onClick={() => handleClick("Ahmad")}
        style={{
          cursor: "pointer",
          padding: "10px",
          backgroundColor: "#0e0d0dff",
          display: "inline-block",
        }}
      >
        Click Me!
      </div>
      <div
        style={{
          height: "50vh",
          padding: "20px",
          backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          display: "inline-block",
        }}
      >
        <h2>Theme</h2>
        <button onClick={toggleTheme}>Theme change</button>
      </div>
    </>
  );
}
export default ClickHandler;
