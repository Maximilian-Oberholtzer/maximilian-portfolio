import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 816,
      md: 1064,
      lg: 1200,
      xl: 1536,
    },
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
