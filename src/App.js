import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import Loader from "./components/Loader";
import Main from "./components/Main";
import { lightTheme, darkTheme } from "./Theme";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("theme") || "light";
  });
  const muiTheme = theme === "light" ? lightTheme : darkTheme;
  const [isLoading, setIsloading] = useState(true);

  //Loader animation before rest of the page gets rendered
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2600);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={muiTheme}>
        <Router>
          <div>
            {isLoading ? (
              <Loader></Loader>
            ) : (
              <>
                <Navbar />
                <Main />
              </>
            )}
          </div>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
