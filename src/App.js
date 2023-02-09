import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Loader from "./components/Loader";
import Main from "./components/Main";
import Theme from "./Theme";
import Navbar from "./components/Navbar";

function App() {
  const theme = Theme;
  const [isLoading, setIsloading] = useState(true);
  //Loader animation before rest of the page gets rendered
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 4000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
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
  );
}

export default App;
