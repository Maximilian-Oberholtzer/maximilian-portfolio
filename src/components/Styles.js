import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: "1600px",
  },
  /////////////////
  //AppBar Styles//
  /////////////////
  root: {
    width: "100vw",
  },
  title: {
    flexGrow: 1,
    color: theme.palette.white.main + " !important",
  },
  appBarContainer: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    placeSelf: "center",
    justifyContent: "center",
    width: "70vw !important",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90vw !important",
      width: "90vw !important",
    },
  },
  appBar: {
    boxShadow: "none !important",
    backgroundColor: theme.palette.mainBlue.main + " !important",
    padding: "2rem 5rem 2rem 5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 2rem 1rem 2rem",
    },
  },
  appBarButton: {
    color: theme.palette.white.main + " !important",
  },
  resumeButton: {
    borderRadius: "8px !important",
    backgroundColor: theme.palette.secondBlue.main + " !important",
    color: theme.palette.white.main + " !important",
  },
  //Drawer Styles//
  drawerButton: {
    color: theme.palette.white.main,
  },
  drawer: {
    "& div.MuiPaper-root": {
      backgroundColor: theme.palette.mainBlue.main,
      width: "50vw",
      maxWidth: "20rem",
      textAlign: "center",
      justifyContent: "center",
      padding: "1.5rem 0 0 0",
      color: theme.palette.white.main,
    },
  },
}));

export default useStyles;
