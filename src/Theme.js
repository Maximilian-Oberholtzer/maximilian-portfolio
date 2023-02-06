import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Jost', sans-serif",
  },
  palette: {
    darkBlue: {
      main: "#17252A",
    },
    secondBlue: {
      main: "#2B7A78",
    },
    mainBlue: {
      main: "#3AAFA9",
    },
    darkWhite: {
      main: "#DEF2F1",
    },
    white: {
      main: "#FEFFFF",
    },
  },
});

export default theme;
