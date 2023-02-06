import "./App.css";
import { React, useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import { CssBaseline } from "@material-ui/core";
import Theme from "./Theme";

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
      <CssBaseline />
      <div>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <>
            <Navbar /> <Hero />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
