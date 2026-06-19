import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: "#F8FAFC",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#60A5FA",
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
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
      xs: 450,
      sm: 960,
      md: 1048,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      main: "#F8FAFC",
    },
    backgroundSecondary: {
      main: "#60A5FA",
    },
    buttonHover: {
      main: "#3B82F6",
    },
    textMain: {
      main: "#0F172A",
    },
    textSecondary: {
      main: "#60A5FA",
    },
  },
});

export const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: "#0D1117",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#1E3A5F",
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
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
      xs: 450,
      sm: 960,
      md: 1048,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      main: "#0D1117",
    },
    backgroundSecondary: {
      main: "#1E3A5F",
    },
    buttonHover: {
      main: "#2D5A8E",
    },
    textMain: {
      main: "#E6EDF3",
    },
    textSecondary: {
      main: "#60A5FA",
    },
  },
});
