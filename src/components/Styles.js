import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  //override default scrollbar
  // "@global": {
  //   "*::-webkit-scrollbar": {
  //     width: ".8em",
  //   },
  //   "*::-webkit-scrollbar-track": {
  //     "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  //     backgroundColor: theme.palette.mainBlue.main + " !important",
  //   },
  //   "*::-webkit-scrollbar-thumb": {
  //     backgroundColor: theme.palette.secondBlue.main + " !important",
  //     border: "3px solid " + theme.palette.mainBlue.main + " !important",
  //     borderRadius: "2rem",
  //   },
  // },

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
        fill: theme.palette.textSecondary.main + " !important",
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
    color: theme.palette.textMain.main + " !important",
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
    transition:
      "all 0.4s cubic-bezier(0.645,0.045,0.355,1), background-color 0ms !important",
    transitionDelay: "0.s",
    transform: "translate3d(0,0,0)",
    boxShadow: "none !important",
    backgroundColor: theme.palette.background.main + " !important",
    border: "none !important",
    padding: "2rem 5rem 2rem 5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 2rem 1rem 2rem",
    },
  },
  appBarScrolled: {
    // transition:
    //   "all 0.4s cubic-bezier(0.645,0.045,0.355,1), background-color 0ms !important",
    // transitionDelay: "0.1s",
    transform: "translate3d(0,0,0)",
    backgroundColor: theme.palette.background.main + " !important",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    padding: "0.5rem 5rem 0.5rem 5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 2rem 0.5rem 2rem",
    },
  },
  appBarButton: {
    color: theme.palette.textMain.main + " !important",
    "&:hover": {
      color: theme.palette.textSecondary.main + " !important",
    },
  },
  resumeButton: {
    borderRadius: "8px !important",
    backgroundColor: theme.palette.backgroundSecondary.main + " !important",
    color: theme.palette.textMain.main + " !important",
    "&:hover": {
      backgroundColor: theme.palette.buttonHover.main + " !important",
    },
  },
  //Drawer Styles//
  drawerButton: {
    color: theme.palette.textMain.main,
    fontSize: "2rem !important",
    zIndex: "3 !important",
  },
  drawer: {
    "& div.MuiPaper-root": {
      backgroundColor: theme.palette.background.main,
      width: "50vw",
      maxWidth: "20rem",
      textAlign: "center",
      justifyContent: "center",
      padding: "1.5rem 0 0 0",
      color: theme.palette.textMain.main,
      zIndex: "2 !important",
    },
  },
}));

export default useStyles;
