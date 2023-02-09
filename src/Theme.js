import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
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
      sm: 960,
      md: 1048,
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

export const darkTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
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
      sm: 960,
      md: 1048,
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
      main: "#000000",
    },
    darkWhite: {
      main: "#DEF2F1",
    },
    white: {
      main: "#FEFFFF",
    },
  },
});
