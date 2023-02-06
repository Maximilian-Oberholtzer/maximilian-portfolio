import "./App.css";
import { React, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import { CssBaseline } from "@material-ui/core";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Open Sans", sans-serif',
    },
    palette: {
      lightTan: {
        main: "#F7ECDE",
      },
      tan: {
        main: "#E9DAC1",
      },
      darkBlue: {
        main: "#18978F",
      },
      blue: {
        main: "#54BAB9",
      },
    },
  });

  const [isLoading, setIsloading] = useState(true);
  //Loader animation before rest of the page gets rendered
  useEffect(() => {
    setTimeout(() => {
      setIsloading(true);
    }, 5000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        {!isLoading ? (
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
