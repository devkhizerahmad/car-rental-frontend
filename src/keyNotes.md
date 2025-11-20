# A) React Context (best for global-ish values)

# // ThemeContext.js
import React from "react";
export const ThemeContext = React.createContext();

# // App.jsx (Provider)
import { ThemeContext } from "./ThemeContext";
function App(){
  const [theme,setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <B />
    </ThemeContext.Provider>
  );
}

# // Any deeply nested component
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function D(){
  const {theme,setTheme} = useContext(ThemeContext);
  return <button onClick={()=>setTheme(t=> t==="light"?"dark":"light")}>Toggle {theme}</button>;
}

# B) useReducer + Context (for complex state)


