import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  /////////////////
  //Navbar Styles//
  /////////////////
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none !important",
    backgroundColor: theme.palette.mainBlue.main + " !important",
    padding: "2rem 5rem 2rem 5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 2rem 1rem 2rem",
    },
  },
  resumeButton: {
    border: `2px solid ${theme.palette.darkBlue.main} !important`,
    borderRadius: "8px !important",
    backgroundColor: theme.palette.secondBlue.main + " !important",
  },
  //Drawer Styles//
  drawerButton: {
    color: theme.palette.white.main,
  },
  drawer: {
    "& div.MuiPaper-root": {
      backgroundColor: theme.palette.mainBlue.main,
      width: "60vw",
      textAlign: "center",
      justifyContent: "center",
      padding: "1.5rem 0 0 0",
      color: theme.palette.white.main,
    },
  },
}));

export default useStyles;
