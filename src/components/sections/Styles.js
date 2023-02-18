import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    height: "0.4rem",
    width: "2rem",
    borderRadius: "2rem",
    margin: "1rem",
    background: theme.palette.textSecondary.main,
  },
  ///////////////
  //Hero Styles//
  ///////////////
  heroRoot: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.main,
    minHeight: "100vh",
  },
  heroContainer: {
    display: "flex !important",
    flex: "1",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    ["@media (max-height: 730px)"]: {
      paddingTop: "102px",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "2rem",
    },
  },
  heroGrid: {
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0rem !important",
    width: "auto",
  },
  heroText: {
    textAlign: "center",
    animation: "fadeIn",
    animationDuration: "2s",
    width: "50%",
    paddingLeft: "0 !important",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "2rem 4rem 2rem 4rem ",
    },
    margin: "2rem 4rem 2rem 4rem ",
  },
  heroTitle: {
    fontWeight: "bold !important",
    color: theme.palette.textMain.main,
    marginBottom: theme.spacing(0),
    fontSize: "clamp(32px, 4vw, 56px) !important",
  },
  heroSubText: {
    marginTop: theme.spacing(3),
    color: theme.palette.textSecondary.main + " !important",
    fontSize: "clamp(20px, 2vw, 26px) !important",
  },
  heroImageContainer: {
    paddingLeft: "0 !important",
  },
  heroImage: {
    animation: "fadeIn",
    animationDuration: "2s",
    width: "280px",
    borderRadius: "30px",
    backgroundColor: theme.palette.backgroundSecondary.main,
    textAlign: "center",
    margin: "2rem 4rem 2rem 4rem ",
    [theme.breakpoints.down("lg")]: {
      width: "230px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "180px",
    },
  },
  scrollerIcon: {
    animation: "fadeInUp",
    animationDuration: "1s",
    marginBottom: "4rem",
    marginTop: "1rem",
    border: "3px solid " + theme.palette.textMain.main + " !important",
    "&::before": {
      backgroundColor: theme.palette.textMain.main + " !important",
    },
  },
  ////////////////
  //About Styles//
  ////////////////
  aboutRoot: {
    minHeight: "100vh",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
  },
  aboutContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
    overflow: "hidden",
  },
  aboutTitle: {
    fontWeight: "bold !important",
    color: theme.palette.textMain.main,
    fontSize: "clamp(32px, 4vw, 56px) !important",
    textAlign: "-webkit-center",
    animation: "fadeInUp",
    animationDuration: "1s",
  },
  aboutSubText: {
    color: theme.palette.textMain.main,
    fontSize: "clamp(20px, 2vw, 26px) !important",
    textAlign: "center",
    animation: "fadeInUp",
    animationDuration: "1.25s",
  },
  scrollingContainer: {
    position: "relative",
    overflow: "hidden",
    width: "inherit",
    background: `linear-gradient(to right, transparent, ${theme.palette.background.main}, ${theme.palette.background.main}, transparent)`,
    // "&::before": {
    //   content: "''",
    //   position: "absolute",
    //   top: "45px",
    //   left: "908px",
    //   display: "block",
    //   width: "100px",
    //   height: "75px",
    //   background: `linear-gradient(90deg,${theme.palette.background.main},hsla(0,0%,100%,0))`,
    //   backgroundSize: "contain",
    //   zIndex: "1200",
    // },
    // "&::after": {
    //   content: "''",
    //   position: "relative",
    //   top: "-71px",
    //   left: 0,
    //   display: "block",
    //   width: "100px",
    //   height: "75px",
    //   background: `linear-gradient(90deg,${theme.palette.background.main},hsla(0,0%,100%,0))`,
    //   backgroundSize: "contain",
    //   zIndex: "1200",
    //},
  },
  scrollingBelt: {
    display: "flex",
    marginTop: "3rem",
    overflow: "hidden",
  },
  "@keyframes moveLeft": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-1300%)",
    },
  },

  scrollingItem: {
    animation: "$moveLeft 22s linear infinite",
    background: theme.palette.backgroundSecondary.main,
    marginRight: "3rem",
    borderRadius: "1rem",
    padding: "1rem",
    minWidth: "8rem",
    textAlign: "center",
  },
  //////////////////
  //Hobbies Styles//
  //////////////////
  hobbiesRoot: {
    minHeight: "100vh",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
  },
  hobbiesContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
  },
  hobbiesTitle: {
    fontWeight: "bold !important",
    color: theme.palette.textMain.main,
    fontSize: "clamp(32px, 4vw, 56px) !important",
    textAlign: "-webkit-center",
    animation: "fadeInUp",
    animationDuration: "1s",
  },
  hobbiesSubText: {
    color: theme.palette.textMain.main,
    fontSize: "clamp(20px, 2vw, 26px) !important",
    textAlign: "center",
    animation: "fadeInUp",
    animationDuration: "1.25s",
  },
  hobbiesGrid: {
    padding: "2rem 0rem 2rem 0rem",
    justifyContent: "center",
    animation: "fadeInUp",
    animationDuration: "1.25s",
  },
  hobbiesGridTitle: {
    fontSize: "clamp(26px, 2vw, 30px) !important",
    color: theme.palette.textMain.main,
    textAlign: "center",
    marginTop: "1rem !important",
  },
  hobbiesGridSubtext: {
    fontSize: "clamp(16px, 1.5vw, 18px) !important",
    color: theme.palette.textSecondary.main,
    textAlign: "center",
  },
  hobbiesGridItem: {
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
    padding: "4rem 4rem 4rem 4rem !important",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 4rem 2rem 4rem !important",
    },
    textAlign: "center",
    color: theme.palette.textMain.main,
    minWidth: "33%",
    flexGrow: "1",
  },
}));

export default useStyles;
