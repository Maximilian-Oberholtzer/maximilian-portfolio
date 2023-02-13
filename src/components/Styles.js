import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: "1600px",
  },

  //////////////////////
  //Side Anchor Styles//
  //////////////////////

  leftAnchor: {
    width: "40px",
    position: "fixed",
    bottom: "16vh",
    left: "40px",
    right: "auto",
    Zndex: "10",
    lineHeight: "44px",
    animation: "fadeInLeft",
    animationDuration: "1s",
  },

  rightAnchor: {
    width: "40px",
    position: "fixed",
    bottom: "16vh",
    left: "auto",
    right: "60px",
    Zndex: "10",
    animation: "fadeInRight",
    animationDuration: "1s",
  },

  anchorButtonSvg: {
    "& svg": {
      width: "2.2rem",
      transition: "width 0.1s ease-in-out",
    },
    "&:hover": {
      "& svg": {
        fill: theme.palette.darkBlue.main + " !important",
        width: "2.5rem",
      },
    },
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
    "&:hover": {
      color: theme.palette.darkBlue.main + " !important",
    },
  },
  resumeButton: {
    borderRadius: "8px !important",
    backgroundColor: theme.palette.secondBlue.main + " !important",
    color: theme.palette.white.main + " !important",
    "&:hover": {
      backgroundColor: theme.palette.darkWhite.main + " !important",
    },
  },
  //Drawer Styles//
  drawerButton: {
    color: theme.palette.white.main,
    fontSize: "2rem !important",
    zIndex: "3 !important",
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
      zIndex: "2 !important",
    },
  },
}));

export default useStyles;
