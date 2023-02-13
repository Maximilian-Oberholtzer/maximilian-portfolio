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
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
    fontWeightRegular: 600,
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
      main: "#9EB2CB",
    },
    secondBlue: {
      main: "#ACDFDE",
    },
    mainBlue: {
      main: "#F5FFFD",
    },
    darkWhite: {
      main: "#7DCDCB",
    },
    white: {
      main: "#0B132B",
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
          "&:hover": {
            backgroundColor: "transparent",
          },
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
      main: "#6FFFE9",
    },
    secondBlue: {
      main: "#3A506B",
    },
    mainBlue: {
      main: "#0B132B",
    },
    darkWhite: {
      main: "#53739A",
    },
    white: {
      main: "#FEFFFF",
    },
  },
});
